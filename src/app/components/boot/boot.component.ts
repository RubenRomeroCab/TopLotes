import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatService } from '../../services/chatbot.service';

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
    { texto: '¡Hola! ¿En qué puedo ayudarte?', esUsuario: false }
  ];

  constructor(private chatService: ChatService) {}

  abrir() {
    this.chatAbierto = !this.chatAbierto;
  }

  async enviarMensaje(texto: string) {
    if (!texto.trim()) return;

    this.mensajes.push({ texto, esUsuario: true });

    try {
      const respuesta = await this.chatService.enviarMensaje(texto);
      this.mensajes.push({ texto: respuesta, esUsuario: false });
    } catch (e) {
      this.mensajes.push({ texto: 'Oops, algo salió mal 😅', esUsuario: false });
    }
  }
}