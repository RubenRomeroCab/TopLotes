import { Component, OnInit } from '@angular/core';
import { ArticulosService } from '../../services/articulos.service';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-articulo-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './articulo-detail.component.html',
  styleUrl: './articulo-detail.component.css'
})
export class ArticuloDetailComponent implements OnInit{

  articulo:any
  id!:string | null;
  mostrar:boolean = false;
  constructor(private articuloService:ArticulosService,
              private activateRouter:ActivatedRoute
  ){}


  ngOnInit(): void {
   this.id = this.activateRouter.snapshot.paramMap.get('id');
   if(this.id){
    this.articuloService.getProductoById(this.id).pipe(take(1)).subscribe(data =>{
    this.articulo = data;
    console.log(this.articulo)
    })
   }
   
  }

  mostrarMensaje(){
    this.mostrar=true
    setTimeout(()=>{
      this.mostrar=false
    },5000)
  }

}
