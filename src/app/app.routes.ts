import { Routes } from '@angular/router';
import { RoutesEnum } from '../shared/Dictionary.enum';

export const routes: Routes = [
  {path: '', redirectTo: RoutesEnum.WORK_TASK, pathMatch: 'full', title: 'Home' },
  {path: RoutesEnum.WORK_TASK, loadChildren: () => import('../modules/workTasks/work-tasks.routes'), title: 'Tareas' },
  {path: RoutesEnum.CATEGORIES, loadChildren: () => import('../modules/categories/categories.routes'), title: 'Categorias' }
];
