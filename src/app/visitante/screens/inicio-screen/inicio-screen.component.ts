import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-screen',
  templateUrl: './inicio-screen.component.html',
  styleUrls: ['./inicio-screen.component.css']
})
export class InicioScreenComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navegarContactanos(){
    this.router.navigate(['/visitantes/contactanos-screen']);
  }

}
