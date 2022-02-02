import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarifas',
  templateUrl: './tarifas.component.html',
  styleUrls: ['./tarifas.component.css']
})
export class TarifasComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.router.navigate(["/tarifas/"])
  }

}
