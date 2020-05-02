import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../user';
import { Observable } from 'rxjs';
import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class HttpclientService {

  constructor(private http: HttpClient) { }

  getDemoValue(){
    //const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(sessionStorage.getItem('token')) });
    return this.http.get("http://localhost:8083/hello", {responseType: 'text'});
  }

  getAllProducts():Observable<Product[]>{
    return this.http.get<Product[]>("http://localhost:8083/getAllProducts");
  }



}
