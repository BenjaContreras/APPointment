import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto-screen',
  templateUrl: './contacto-screen.component.html',
  styleUrls: ['./contacto-screen.component.css']
})
export class ContactoScreenComponent implements OnInit {

  public screenHeight: number;
  constructor() { }

  ngOnInit(): void {

    let { height } = window.screen;
    
    this.screenHeight = height;
  }

}
