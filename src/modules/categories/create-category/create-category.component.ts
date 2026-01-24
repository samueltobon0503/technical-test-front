import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { CategoryService } from '../../../core/services/categories.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RoutesEnum } from '../../../shared/Dictionary.enum';

@Component({
  selector: 'app-create-category-component',
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule
  ],
  templateUrl: './create-category.component.html',
  styleUrl: './create-category.component.scss',
})
export class CreateCategoryComponent {

  categoryName = signal<string>('');
  categoryDescription = signal<string>('');

  constructor(
    private readonly categoryService: CategoryService,
    private readonly router: Router,
  ) {}

  ngOnInit(): void {}

  submit(){
    const payload: CreateCategoryModel = {
      name: this.categoryName(),
      description: this.categoryDescription()
    };

    this.categoryService.createCategoy(payload).subscribe({
      next: () => {
        this.resetForm();
        this.goBack();
      }
    });
  }

  private resetForm() {
    this.categoryName.set('');
    this.categoryDescription.set('');
  }

  goBack(){
    this.router.navigate([`${RoutesEnum.WORK_TASK}`]);
  }
}
