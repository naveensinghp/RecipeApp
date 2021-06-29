import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../environments/environment';
import { APIResponse,RecipeCategory } from '.././model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiBackendService {

  constructor(private http: HttpClient) { }

  getRecipeCategory(){
    return this.http.get<APIResponse<RecipeCategory>>(`${env.API_URL}/recipe/category`)
  }

  getProducts(): Observable<RecipeCategory[]> {
    return this.http.get<RecipeCategory[]>(`${env.API_URL}/recipe/category`);
  }
}
export interface Product{
  code: string;
  description: string;
  type: string;
}