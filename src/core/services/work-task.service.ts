import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../config/enviroment';

@Injectable({
  providedIn: 'root'
})
export class WorkTaskService {
  private readonly _httpClient = inject(HttpClient);

  getKeyUsersRegister() {
    return this._httpClient.get<any>(`${environment.baseUrl}/WorkTask/get-all`);
  }

  getAllKeyUsers() {
    return this._httpClient.get<any>(`${environment.baseUrl}/KeyUser/GetAllKeyUsers`);
  }
}
