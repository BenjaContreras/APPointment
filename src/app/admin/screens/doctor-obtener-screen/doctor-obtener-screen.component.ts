import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from 'src/app/core/models/doctor.model';
import { DoctorProvidersService } from 'src/app/core/providers/doctor/doctor-providers.service';

@Component({
  selector: 'app-doctor-obtener-screen',
  templateUrl: './doctor-obtener-screen.component.html',
  styleUrls: ['./doctor-obtener-screen.component.css']
})
export class DoctorObtenerScreenComponent implements OnInit {

  public doctor$: Observable<Doctor[]>;
  constructor(
    private doctorProviderServices: DoctorProvidersService,
  ) { 
    this.doctor$ = this.getAllDoctor();
  }

  ngOnInit(): void {
  }

  getAllDoctor() {
    return this.doctorProviderServices.getAllDoctors();
  }

}
