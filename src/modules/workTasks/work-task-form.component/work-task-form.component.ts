import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RoutesEnum, TaskStatus } from '../../../shared/Dictionary.enum';
import { WorkTaskService } from '../../../core/services/work-task.service';
import { CategoryService } from '../../../core/services/categories.service';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';

@Component({
  selector: 'app-work-task-form.component',
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    MatSelectModule,
    MatDatepickerModule,
  ],
  templateUrl: './work-task-form.component.html',
  styleUrl: './work-task-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkTaskFormComponent implements OnInit {
  taskId = signal<string>('');
  taskRowVersion = signal<string>('');
  taskTitle = signal<string>('');
  taskStatus = signal<TaskStatus | null>(null);
  taskDueDate = signal<Date | null>(null);
  taskCategoryId = signal<number>(0);

  categories: CategoryModel[] = [];
  currentMode: string | undefined = '';

  statusOptions = [
    { value: TaskStatus.Pending, label: 'Pendiente' },
    { value: TaskStatus.InProgress, label: 'En Progreso' },
    { value: TaskStatus.Completed, label: 'Completada' },
  ];

  constructor(
    private readonly workTaskService: WorkTaskService,
    private readonly categoryService: CategoryService,
    private readonly router: Router,
    private Aroute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.Aroute.url.subscribe((segments) => {
      this.currentMode = segments.pop()?.path;
      if (this.currentMode == RoutesEnum.EDIT) {
        this.getWorkTaskById();
      }
    });
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getAllCategories().subscribe((response: any) => {
      this.categories = response.data;
      console.log(this.categories);
    });
  }

  getWorkTaskById() {
    this.workTaskService
      .getWorkTaskById(this.Aroute.snapshot.queryParams['id'])
      .subscribe((response: any) => {
        const task = response.data;

        this.taskTitle.set(task.title);
        this.taskStatus.set(task.status);
        this.taskCategoryId.set(task.categoryId);
        this.taskId.set(task.id);
        this.taskRowVersion.set(task.rowVersion);
        if (task.dueDate) {
          this.taskDueDate.set(new Date(task.dueDate));
        }
      });
  }

  submit() {
    if (this.currentMode === RoutesEnum.CREATE) {
      const payload: CreateWorkTaskModel = {
        title: this.taskTitle(),
        status: this.taskStatus(),
        dueDate: this.taskDueDate(),
        categoryId: this.taskCategoryId(),
      };

      this.workTaskService.createWorkTask(payload).subscribe({
        next: () => {
          this.resetForm();
          this.goBack();
        }
      });
    } else if (this.currentMode === RoutesEnum.EDIT) {
      const payload: UpdateWorkTaskModel = {
        title: this.taskTitle(),
        status: this.taskStatus(),
        dueDate: this.taskDueDate(),
        categoryId: this.taskCategoryId(),
        id: this.taskId(),
        rowVersion: this.taskRowVersion()
      };

       this.workTaskService.updateWorkTask(payload).subscribe({
        next: () => {
          this.resetForm();
          this.goBack();
        }
      });
    }
  }

  private resetForm() {
    this.taskTitle.set('');
    this.taskStatus.set(0);
    this.taskDueDate.set(new Date());
    this.taskCategoryId.set(0);
    this.taskId.set("");
    this.taskRowVersion.set("");
  }

  goBack() {
    this.router.navigate([`${RoutesEnum.WORK_TASK}`]);
  }
}
