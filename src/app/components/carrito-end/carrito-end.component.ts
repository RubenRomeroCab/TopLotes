import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-carrito-end',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './carrito-end.component.html',
  styleUrl: './carrito-end.component.css'
})
export class CarritoEndComponent {


  selectedOption: string = ''; // Almacena la opción seleccionada

  onOptionChange(): void {
    // Se puede agregar lógica adicional si es necesario
    console.log(`Opción seleccionada: ${this.selectedOption}`);
  }
}
