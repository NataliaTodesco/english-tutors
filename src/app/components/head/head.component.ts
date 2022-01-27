import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {
  fecha = new Date();
  hora = this.fecha.getHours();
  texto = "";

  constructor() { }

  ngOnInit(): void {
    this.mostrarSaludo();
  }

  mostrarSaludo() {
    this.fecha = new Date();
    this.hora = this.fecha.getHours();

    if (this.hora >= 8 && this.hora < 20) {
      this.texto = "Abierto Ahora";

    }

    if (this.hora >= 20 && this.hora < 24) {
      this.texto = "Cerrado Ahora";

    }

    if (this.hora >= 0 && this.hora < 8) {
      this.texto = "Cerrado Ahora";

    }

}
}
