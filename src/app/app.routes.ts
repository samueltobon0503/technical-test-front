import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: 'work-tasks', pathMatch: 'full', title: 'Home' },
  {path: 'work-tasks', loadChildren: () => import('../modules/workTasks/work-tasks.routes'), title: 'Work Tasks' }
];
