import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from './categoryModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _http: HttpClient) { }
  getCategoryList(): Observable<Category[]> {
    return this._http.get<Category[]>('https://localhost:7020/api/Category')
  }
  getCategoryById(id: number): Observable<Category> {
      return this._http.get<Category>(`https://localhost:7020/api/Category/${id}`)
    }

}



