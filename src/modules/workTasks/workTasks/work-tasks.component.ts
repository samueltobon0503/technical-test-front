import { Component, OnInit } from '@angular/core';
import { WorkTaskService } from '../../../core/services/work-task.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { Router } from '@angular/router';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RoutesEnum, TASK_STATUS_LABELS } from '../../../shared/Dictionary.enum';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-work-tasks.component',
  imports: [MatCardModule, MatButtonModule, MatIconModule, MatDividerModule,
    MatTableModule, CommonModule
  ],
  templateUrl: './work-tasks.component.html',
  styleUrl: './work-tasks.component.scss',
})
export class WorkTasksComponent implements OnInit {
  workTasks: WorkTaskModel[] = [];
  dataSource = new MatTableDataSource<WorkTaskModel>();
  displayedColumns: string[] = ['title', 'status', 'dueDate', 'category', 'acciones'];
  public statusLabels = TASK_STATUS_LABELS;

  constructor(private readonly workTaskService: WorkTaskService, private readonly router: Router){}

  ngOnInit(): void {
    this.getWorkTasks();
  }

  getWorkTasks(): void {
    this.workTaskService.getWorkTasks().subscribe((response: any) => {
      this.dataSource.data = response.data;
    });
  }

  goToCreateCategory(){
    this.router.navigate([`${RoutesEnum.CATEGORIES}/${RoutesEnum.CREATE}`]);
  }

  goToCreateTask(){
    this.router.navigate([`${RoutesEnum.WORK_TASK}/${RoutesEnum.CREATE}`]);
  }

  goToUpdateTask(id: string){
    this.router.navigate([`${RoutesEnum.WORK_TASK}/${RoutesEnum.EDIT}`], { queryParams: { id: id } });
  }
}
