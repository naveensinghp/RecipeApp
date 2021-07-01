import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment as env } from '../../environments/environment';
import { APIResponse,RecipeCategory,NewAccountUser } from '.././model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiBackendService {

  constructor(private http: HttpClient) { }

  getRecipeCategory(){
    return this.http.get<APIResponse<RecipeCategory>>(`${env.API_URL}/recipe/category`)
  }

  createNewAccount(newUser: NewAccountUser): Observable<NewAccountUser> {
      return this.http.post<NewAccountUser>(`${env.API_URL}/recipe/newuser`, newUser, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      });
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
