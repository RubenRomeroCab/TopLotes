import { Injectable } from '@angular/core';
import { addDoc, collection, CollectionReference, DocumentData, Firestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PagosService {

  private formCollection: CollectionReference<DocumentData>;


  constructor(private enviarForm: Firestore) {
    this.formCollection = collection(this.enviarForm, 'formularios');
  }


  async enviarFormulario(formData: any) {
    try {
       const formdata = formData.value
      const docRef = await addDoc(this.formCollection, formdata);

     
      console.log("Formulario enviado con éxito. ID:", docRef.id);
    } catch (e) {
      console.error("Error al enviar el formulario:", e);
    }
  }
}
