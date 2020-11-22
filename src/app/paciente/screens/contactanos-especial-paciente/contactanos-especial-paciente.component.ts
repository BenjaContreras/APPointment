import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contactanos-especial-paciente',
  templateUrl: './contactanos-especial-paciente.component.html',
  styleUrls: ['./contactanos-especial-paciente.component.less']
})
export class ContactanosEspecialPacienteComponent implements OnInit {

  checkoutForm: FormGroup;
  mensaje:string="";
  isDivVisible=false;


  constructor(private router: Router) { 
    this.checkoutForm = this.createFormGroup();
  }

  ngOnInit(): void {
  }

  createFormGroup() {
    return new FormGroup(
      {
      usuario: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$")]),
      nombre: new FormControl('',[Validators.required]),
      telefono: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required]),
      confirmacion: new FormControl('', [Validators.required]),
      }
    );
  }

  onSubmit(){
    this.mensaje="Su peticion ha sido enviada con exito!";
    this.isDivVisible=true;
  }

  get usuario() { return this.checkoutForm.get('usuario'); }
  get nombre() { return this.checkoutForm.get('nombre'); }
  get telefono() { return this.checkoutForm.get('telefono'); }
  get password() { return this.checkoutForm.get('password'); }
  get confirmacion() { return this.checkoutForm.get('confirmacion'); }


}