import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-citas-screen',
  templateUrl: './citas-screen.component.html',
  styleUrls: ['./citas-screen.component.css']
})
export class CitasScreenComponent implements OnInit {

  public screenHeight: number;
  constructor() { }

  ngOnInit(): void {

    let { height } = window.screen;
    
    this.screenHeight = height;
  }

}
