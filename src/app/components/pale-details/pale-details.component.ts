import { Component, OnInit } from '@angular/core';
import { Pale } from '../../models/pale.model';
import { ActivatedRoute } from '@angular/router';
import { pales } from '../../models/pales';
import { CommonModule } from '@angular/common';
import { PaleService } from '../../services/pales.service';
import { Subscription } from 'rxjs';
import { HistorialService } from '../../services/historial.service';

@Component({
  selector: 'app-pale-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pale-details.component.html',
  styleUrl: './pale-details.component.css'
})

export class PaleDetailsComponent implements OnInit {


  pale!: Pale | undefined;
  precioTotal!:number;
  precioCarrito!:number;

  private subscription: Subscription = new Subscription();
  alertMessage: string = '';


  constructor(private route: ActivatedRoute,
              private servicioPale:PaleService,
            private historialService:HistorialService) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = Number(idParam );
    this.pale = pales.find((pales) => pales.id ===id);
    
    

    this.subscription.add(
      this.servicioPale.alerta$.subscribe(message => {
        this.alertMessage = message; // Debe ser un string
        setTimeout(() => this.alertMessage = '', 5000); // Ocultar alerta después de 3 segundos
      })
    );

    if(this.pale){
      this.historialService.guardarProducto(this.pale)
    }
    window.scrollTo(0, 0);
  }

  
  agregarAlCarrito(pale:Pale){
      this.servicioPale.agregarPale(pale)
      
  }

}
