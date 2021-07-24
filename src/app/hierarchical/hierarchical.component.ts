import { Component, OnInit } from '@angular/core';
import { HierarchicalService } from './hierarchical.service';
import { Result } from './result';

@Component({
  selector: 'app-hierarchical',
  templateUrl: './hierarchical.component.html',
  styleUrls: ['./hierarchical.component.css']
})
export class HierarchicalComponent implements OnInit {

  titulo:String="Algoritmo de clustering jerárquico ";

  result:Result = new Result;

  constructor(private hierarchicalService:HierarchicalService) { }


  ngOnInit(): void {
    this.hierarchicalService.obtenerResultados().subscribe(
      e =>this.result=e
    );
  }

}
