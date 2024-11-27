import { Component, OnInit } from '@angular/core';
import { ArticulosService } from '../../services/articulos.service';

@Component({
  selector: 'app-articulos',
  standalone: true,
  imports: [],
  templateUrl: './articulos.component.html',
  styleUrl: './articulos.component.css'
})
export class ArticulosComponent implements OnInit{
  articulos:any [] =[]
  constructor(private articuloService:ArticulosService){

  }

  ngOnInit(): void {
     this.articuloService.getProductos().subscribe(data =>{
      this.articulos = data;
      console.log(this.articulos);
     })
  }


  truncateText(text:string, maxLength:number) {
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
  }
}
