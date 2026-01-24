import { Routes } from '@angular/router';
import { WorkTasksComponent } from './workTasks/work-tasks.component';
import { RoutesEnum } from '../../shared/Dictionary.enum';
import { WorkTaskFormComponent } from './work-task-form.component/work-task-form.component';

const routes: Routes = [
  { path: '', component: WorkTasksComponent },
  { path: RoutesEnum.CREATE, component: WorkTaskFormComponent },
  { path: RoutesEnum.EDIT, component: WorkTaskFormComponent },
];

export default routes;
