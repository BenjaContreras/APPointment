import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pacientes-screen',
  templateUrl: './pacientes-screen.component.html',
  styleUrls: ['./pacientes-screen.component.css']
})
export class PacientesScreenComponent implements OnInit {

  public screenHeight: number;
  constructor() { }

  ngOnInit(): void {

    let { height } = window.screen;
    
    this.screenHeight = height;
  }

}
