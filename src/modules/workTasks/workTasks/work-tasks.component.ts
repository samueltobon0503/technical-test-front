import { Component, OnInit } from '@angular/core';
import { WorkTaskService } from '../../../core/services/work-task.service';

@Component({
  selector: 'app-work-tasks.component',
  imports: [],
  templateUrl: './work-tasks.component.html',
  styleUrl: './work-tasks.component.scss',
})
export class WorkTasksComponent implements OnInit {

  workTasks: any[] = [];

  constructor(private readonly workTaskService: WorkTaskService){}

  ngOnInit(): void {
    this.getWorkTasks();
  }

  getWorkTasks(): void {
    this.workTaskService.getKeyUsersRegister().subscribe((response: any) => {
      this.workTasks = response;
      console.log(this.workTasks);
    });
  }
}
