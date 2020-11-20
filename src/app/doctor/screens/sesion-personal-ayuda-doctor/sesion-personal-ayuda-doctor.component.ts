import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sesion-personal-ayuda-doctor',
  templateUrl: './sesion-personal-ayuda-doctor.component.html',
  styleUrls: ['./sesion-personal-ayuda-doctor.component.css']
})
export class SesionPersonalAyudaDoctorComponent implements OnInit {

  public screenHeight: number;
  constructor() { }

  
  ngOnInit(): void {

    let { height } = window.screen;

    this.screenHeight = height;
  }

}
