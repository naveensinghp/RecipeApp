import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { RequestOptions, Http,URLSearchParams,Headers } from '@angular/http';



@Injectable({
  providedIn: 'root'
})
export class ApiBackendService {

  constructor(private http: HttpClient) { }

  getTestData(){
    const headers = new Headers({'Accept':'application/json'});
    let myParams : URLSearchParams = new URLSearchParams();
     let options = new RequestOptions({params: myParams,headers : headers });
     let apiURL = `${environment.api}mongodb/test`;
     console.log(apiURL)
  }
}
