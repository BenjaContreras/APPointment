import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paciente-eliminar-screen',
  templateUrl: './paciente-eliminar-screen.component.html',
  styleUrls: ['./paciente-eliminar-screen.component.css']
})
export class PacienteEliminarScreenComponent implements OnInit {

  constructor() { }

  public screenHeight: number;
  ngOnInit(): void {

    let { height } = window.screen;
    
    this.screenHeight = height;
  }

}
