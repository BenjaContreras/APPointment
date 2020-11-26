import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paciente-modificar-screen',
  templateUrl: './paciente-modificar-screen.component.html',
  styleUrls: ['./paciente-modificar-screen.component.css']
})
export class PacienteModificarScreenComponent implements OnInit {

  constructor() { }

  public screenHeight: number;
  ngOnInit(): void {

    let { height } = window.screen;
    
    this.screenHeight = height;
  }

}
