import { Component, OnInit } from '@angular/core';
import { pales } from '../../../models/pales';
import { PaleService } from '../../../services/pales.service';
import { Pale } from '../../../models/pale.model';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-outlet',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './outlet.component.html',
  styleUrl: './outlet.component.css'
})
export class OutletComponent implements OnInit {


  paleOutlet :Pale[] =[]
  constructor (){}
  ngOnInit(): void {
    this.paleOutlet = pales.filter(pales=> pales.categoria === 'outlet')
    console.log(this.paleOutlet)
  }

}
