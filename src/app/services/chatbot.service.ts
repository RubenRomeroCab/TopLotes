// src/app/services/chat.service.ts
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private systemMessage = {
    role: 'system',
    content: 'Eres un asistente amigable, divertido y conciso. Responde siempre de forma clara y breve.'
  };

  constructor() {}

  async enviarMensaje(mensajeUsuario: string): Promise<string> {
    const body = {
      model: 'gpt-4',
      messages: [
        this.systemMessage,
        { role: 'user', content: mensajeUsuario }
      ],
      temperature: 0.7
    };

    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${environment.openaiApiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });

    const data = await res.json();
    return data.choices[0].message.content;
  }
}
