import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Result } from './result';

@Injectable({
  providedIn: 'root'
})
export class HierarchicalService {

  
  private url:string="https://apiweka-springboot.herokuapp.com/api/hierarchical/";

  
  constructor(private http:HttpClient) { }



  obtenerResultados(link:string,num:number):Observable<Result>{
    return this.http.get<Result>(this.url, {params:{link: link,clusters:num}});
  }



}