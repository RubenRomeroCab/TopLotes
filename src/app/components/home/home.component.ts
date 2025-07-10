import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { pales } from '../../models/pales';
import { Pale } from '../../models/pale.model';
import { CommonModule } from '@angular/common';
import { HistorialService } from '../../services/historial.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  
  paleDestacado: Pale[] = [];
  productosVistos: Pale[] = [];

  constructor(private router:Router,
              private historialService:HistorialService
  ){}
  

  ngOnInit(): void {
    // Utilizar filter para obtener un array de pales destacados
    this.paleDestacado = pales.filter(pale => pale.destacado === true);
    this.productosVistos =  this.historialService.obtenerHistorial();
    // Verifica los resultados en la consola
  }

  mirarPale(pale:Pale){
    if(!pale.vendido){
      this.verPale(pale.id)
    }
  }
  
  verPale(id:number) {
      this.router.navigate(['/pale-details',id])
    }
    

}
