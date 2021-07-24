import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HierarchicalService } from './hierarchical.service';
import { Result } from './result';

@Component({
  selector: 'app-hierarchical',
  templateUrl: './hierarchical.component.html',
  styleUrls: ['./hierarchical.component.css']
})
export class HierarchicalComponent implements OnInit {
  info: Result = new Result;
  link: any;
  num:any;
  titulo:String="Algoritmo de clustering jerárquico ";

  result:Result = new Result;

  constructor(private hierarchicalService:HierarchicalService) { }


  ngOnInit(): void {
    
  }

  mostrar(link:any, clusters: any){
    /*this.forma = new FormGroup({
      clusters: new FormControl('', [Validators.required]),
    
    })*/
   
    this.hierarchicalService.obtenerResultados(link,clusters).subscribe(
    (data:any)=>{
      this.info= data;
      console.log(this.info);
    }
      
    );
  }
}