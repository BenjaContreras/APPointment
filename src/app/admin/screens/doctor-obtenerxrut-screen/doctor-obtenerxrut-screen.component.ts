import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from 'src/app/core/models/doctor.model';
import { DoctorProvidersService } from 'src/app/core/providers/doctor/doctor-providers.service';

@Component({
  selector: 'app-doctor-obtenerxrut-screen',
  templateUrl: './doctor-obtenerxrut-screen.component.html',
  styleUrls: ['./doctor-obtenerxrut-screen.component.css']
})
export class DoctorObtenerxrutScreenComponent implements OnInit {

  public doctor$: Observable<Doctor>;
  constructor(
    private doctorProviderServices: DoctorProvidersService,
  ) { 
    this.doctor$ = this.getDoctor();
  }

  ngOnInit(): void {
  }

  getDoctor() {
    return this.doctorProviderServices.getADoctor();
  }

}
