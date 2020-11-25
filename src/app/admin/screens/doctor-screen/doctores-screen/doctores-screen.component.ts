import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctores-screen',
  templateUrl: './doctores-screen.component.html',
  styleUrls: ['./doctores-screen.component.css']
})
export class DoctoresScreenComponent implements OnInit {

  public screenHeight: number;
  constructor() { }

  ngOnInit(): void {

    let { height } = window.screen;
    
    this.screenHeight = height;
  }

}
