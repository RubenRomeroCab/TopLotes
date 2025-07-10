import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cookis',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cookis.component.html',
  styleUrl: './cookis.component.css'
})
export class CookisComponent {

  mostrarCookis = true;

  cookisAceptar(){
    this.mostrarCookis=false;
  }

}
