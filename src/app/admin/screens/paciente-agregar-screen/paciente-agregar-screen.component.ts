import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paciente-agregar-screen',
  templateUrl: './paciente-agregar-screen.component.html',
  styleUrls: ['./paciente-agregar-screen.component.css']
})
export class PacienteAgregarScreenComponent implements OnInit {

  constructor() { }

  public screenHeight: number;
  ngOnInit(): void {

    let { height } = window.screen;
    
    this.screenHeight = height;
  }

}
