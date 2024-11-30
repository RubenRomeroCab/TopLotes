import { Injectable } from '@angular/core';
import { collectionData, doc, docData, Firestore} from '@angular/fire/firestore';
import { collection} from 'firebase/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  articulosCollection : any 
  constructor(private articuloService:Firestore) { 
  this.articulosCollection = collection( this.articuloService,'productos');
  }


  
getProductos(): Observable<any[]> {
  return collectionData(this.articulosCollection, { idField: 'id' }) as Observable<any[]>;
}


getProductoById(id: string): Observable<any> {
  const productoDoc = doc(this.articuloService, `productos/${id}`); // Referencia al documento
  return docData(productoDoc, { idField: 'id' }) as Observable<any>;
}
}

