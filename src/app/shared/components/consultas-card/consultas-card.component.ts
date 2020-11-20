import { Component, Input, OnInit } from '@angular/core';
import { Cita } from 'src/app/core/models/citas-card.models';
import { CitasService } from 'src/app/core/services/citas/citas.service';

@Component({
  selector: 'app-consultas-card',
  templateUrl: './consultas-card.component.html',
  styleUrls: ['./consultas-card.component.css']
})
export class ConsultasCardComponent implements OnInit {

  @Input()
  public cita: Cita;

  constructor() { }

  ngOnInit(): void {
  }

}
