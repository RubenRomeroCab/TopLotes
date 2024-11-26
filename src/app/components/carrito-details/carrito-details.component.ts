import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { PaleService } from '../../services/pales.service';
import { Pale } from '../../models/pale.model';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';






@Component({
  selector: 'app-carrito-details',
  standalone: true,
  imports: [RouterLink, CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './carrito-details.component.html',
  styleUrl: './carrito-details.component.css'
})
export class CarritoDetailsComponent implements OnInit {


  pale !: Pale[]
  precioTotalConIVA: number = 0;

  formData = {
    nombre: '',
    apellido: '',
    nif: '',
    telefono: null,
    email: '',
    poblacion: '',
    provincia: '',
    notas: '',
    paleIds: [] as number[],
    metodoPago:'',
  };

  checkoutForm: any;
  elementoEliminado!: boolean;
  paleSelecionado !: number;
  constructor(private carritoService: PaleService,
    private route: Router,




  ) { }




  ngOnInit(): void {
    this.pale = this.carritoService.mostrarcarrtito();
    console.log(this.pale);

    this.precioFinalCompra();
    this.setPaleIdFromCart();
    this.carritoService.getPrecioTotalConIVA$().subscribe({
      next: (totalConIVA) => {
        this.precioTotalConIVA = totalConIVA + (totalConIVA * 0.21);
      }
    })
  }





  borrarPale(event: Event, idPale: number) {
    event.stopPropagation();
    const index = this.pale.findIndex(pale => pale.id === idPale);
    if (index !== -1) {
      // Eliminar el objeto usando splice
      this.pale.splice(index, 1);
    }

    // Llama al servicio para eliminar el Pale
    this.carritoService.eliminarPale(idPale);

    // Actualiza el precio final
    this.precioFinalCompra();
    this.elementoEliminado = true;
    setTimeout(() => {
      this.elementoEliminado = false; // Desactiva el mensaje de alerta después de 5 segundos
    }, 5000); // 5000 milisegundos = 5 segundos

  }


  verPale(id: number) {
    this.route.navigate(['/pale-details', id])
    console.log('pale seleccionado')
    this.paleSelecionado = id;
  }

  precioFinalCompra() {
    // Resetear el precioFinal a cero antes de calcularlo de nuevo
    this.precioTotalConIVA = 0;

    // Sumar el precio base de todos los palés
    for (let i = 0; i < this.pale.length; i++) {
      // Asegúrate de que pale[i].precio es un número y suma el precio base
      this.precioTotalConIVA += Number(this.pale[i].precio) || 0;
    }
    if (this.pale.length > 0) {

    }

  }

  pagoRealizado() {

    for (let i = 0; i < this.pale.length; i++) {
      //Asegúrate de que pale[i].precio es un número y suma el precio base
      this.pale[i].vendido = true;

    }

    this.carritoService.limpiarCarrito()


  }




  selectedOption: string = ''; // Almacena la opción seleccionada

  onOptionChange(): void {
    // Se puede agregar lógica adicional si es necesario
    console.log(`Opción seleccionada: ${this.selectedOption}`);
  }

  enviar(form: NgForm) {

    if (form.invalid) {
      console.log("ERROR");
    } else {
      console.log(form.value);
      this.pagoRealizado();
      form.reset();
    }
  }

  setPaleIdFromCart() {
    if (this.pale.length > 0) {
      // Si hay palés en el carrito, obtenemos los IDs de todos los palés
      this.formData.paleIds = this.pale.map(pale => pale.id);  // Extraemos los IDs de los palés
      console.log('IDs de palés asignados:', this.formData.paleIds);
    }
  }
}
