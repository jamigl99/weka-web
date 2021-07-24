import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Result } from './result';

@Injectable({
  providedIn: 'root'
})
export class HierarchicalService {

  private url:string="https://apiweka-springboot.herokuapp.com/api/hierarchical/?link=complete&clusters=3";

  constructor(private http:HttpClient) { }

  //Obtener Resultados Hierarchical
  obtenerResultados():Observable<Result>{
    return this.http.get<Result>(this.url);
  }



}
