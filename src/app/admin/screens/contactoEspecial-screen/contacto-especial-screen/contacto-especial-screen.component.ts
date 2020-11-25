import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto-especial-screen',
  templateUrl: './contacto-especial-screen.component.html',
  styleUrls: ['./contacto-especial-screen.component.css']
})
export class ContactoEspecialScreenComponent implements OnInit {

  public screenHeight: number;
  constructor() { }

  ngOnInit(): void {

    let { height } = window.screen;
    
    this.screenHeight = height;
  }

}
