import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cita } from 'src/app/core/models/citas-card.models';
import { CitasService } from 'src/app/core/services/citas/citas.service';

@Component({
  selector: 'app-agregar-cita-card',
  templateUrl: './agregar-cita-card.component.html',
  styleUrls: ['./agregar-cita-card.component.css']
})
export class AgregarCitaCardComponent implements OnInit {

  public citaId: number;
  public citaNew: Cita;

  checkoutForm: FormGroup;
  mensaje:string="";
  isDivVisible = false;


  constructor(private router: Router , private citasService: CitasService) { 
    this.checkoutForm = this.createFormGroup();
  }

  ngOnInit(): void {
  }

  createFormGroup() {
    return new FormGroup(
      {
        paciente: new FormControl('',[Validators.required]),
        descripcion: new FormControl('', [Validators.required]),
        fechaConsulta: new FormControl('', [Validators.required]),
      }
    );
  }

  onSubmit(){
    this.mensaje="Cita agregada correctamente";
    this.isDivVisible = true;
    this.citasService.agregarCita(this.citaId,this.citaNew);
    this.checkoutForm.reset();
  }

  get paciente() { return this.checkoutForm.get('paciente').value; }
  get descripcion() { return this.checkoutForm.get('descripcion').value }
  get fechaConsulta() { return this.checkoutForm.get('fechaConsulta').value }

}

