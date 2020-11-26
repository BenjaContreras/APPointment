import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cita } from 'src/app/core/models/cita.model';
import { CitasProvidersService } from 'src/app/core/providers/citas/citas-providers.service';

@Component({
  selector: 'app-citas-screen',
  templateUrl: './citas-screen.component.html',
  styleUrls: ['./citas-screen.component.css']
})
export class CitasScreenComponent implements OnInit {

  public citas$: Observable<Cita[]>;
  public screenHeight: number;

  constructor(
    private citasProviderServices: CitasProvidersService,
  ) { 
    this.citas$ = this.getCitas();
  }

  ngOnInit(): void {
    
    let { height } = window.screen;
    this.screenHeight = height;
  }

  getCitas() {
    return this.citasProviderServices.getAllCitas();
  }

}
