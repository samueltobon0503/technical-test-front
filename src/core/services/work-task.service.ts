import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../config/enviroment';
import { DataResponse } from '../models/DataResponse';
import { CreateWorkTaskModel } from '../models/work-task/CreateWorkTaskModel';
import { UpdateWorkTaskModel } from '../models/work-task/UpdateWorkTaskModel';
import { WorkTaskModel } from '../models/work-task/WorkTaskModel';

@Injectable({
  providedIn: 'root',
})
export class WorkTaskService {
  private readonly _httpClient = inject(HttpClient);

  getWorkTasks() {
    return this._httpClient.get<DataResponse<WorkTaskModel>>(
      `${environment.baseUrl}/WorkTask/get-all`,
    );
  }

  getWorkTaskById(id: string) {
    return this._httpClient.get<DataResponse<WorkTaskModel>>(
      `${environment.baseUrl}/WorkTask/get-by-id/${id}`,
    );
  }

  createWorkTask(body: CreateWorkTaskModel) {
    return this._httpClient.post<DataResponse<any>>(`${environment.baseUrl}/WorkTask/create`, body);
  }

  updateWorkTask(body: UpdateWorkTaskModel){
    return this._httpClient.put<DataResponse<any>>(`${environment.baseUrl}/WorkTask/update`, body);
  }
}
