import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-boot',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './boot.component.html',
  styleUrl: './boot.component.css',
})
export class BootComponent {
  chatAbierto = false;

  mensajes: { texto: string; esUsuario: boolean }[] = [
    { texto: '¡Hola! ¿En qué puedo ayudarte?', esUsuario: false },
  ];

  constructor() {}

  cerrar() {
    this.chatAbierto = false;
  }
  abrir() {
    this.chatAbierto = !this.chatAbierto;
  }

  enviarMensaje(texto: string) {
    if (!texto.trim()) return;

    this.mensajes.push({ texto, esUsuario: true });

    setTimeout(() => {
      this.mensajes.push({
        texto: 'Esta es una respuesta automática.',
        esUsuario: false,
      });
    }, 1000);
  }
}
