import { Injectable } from '@angular/core';
import { Pale } from '../models/pale.model';

@Injectable({
  providedIn: 'root'
})
export class HistorialService {
  
  private clave = 'productoVisto';
  private limite = 10;

  constructor() { }


  guardarProducto(pale: Pale): void {
  let historial: Pale[] = JSON.parse(localStorage.getItem(this.clave) || '[]');

  // Evitar duplicados
  historial = historial.filter(p => p.id !== pale.id);

  // Añadir al principio
  historial.unshift(pale);

  // Limitar a 10 productos
  historial = historial.slice(0, this.limite);

  // Guardar en localStorage
  localStorage.setItem(this.clave, JSON.stringify(historial));
}

obtenerHistorial(): Pale[] {
  const data = localStorage.getItem(this.clave);
  if (data) {
    return JSON.parse(data);
  }
  return [];
}
}
