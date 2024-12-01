import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscribe',
  standalone: true,
  imports: [],
  templateUrl: './subscribe.component.html',
  styleUrl: './subscribe.component.css'
})
export class SubscribeComponent implements OnInit {


  ngOnInit(): void {
    window.scrollTo(0, 0);
 }

}
