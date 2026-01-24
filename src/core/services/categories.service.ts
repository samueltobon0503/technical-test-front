import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../config/enviroment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private readonly _httpClient = inject(HttpClient);

  createCategoy(body: CreateCategoryModel) {
    return this._httpClient.post<DataResponse<WorkTaskModel>>(`${environment.baseUrl}/Category/create`, body);
  }

  getAllCategories() {
    return this._httpClient.get<DataResponse<CategoryModel>>(`${environment.baseUrl}/Category/get-all`);
  }
}
