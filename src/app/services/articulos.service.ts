import { Injectable } from '@angular/core';
import { collectionData, Firestore} from '@angular/fire/firestore';
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
}

