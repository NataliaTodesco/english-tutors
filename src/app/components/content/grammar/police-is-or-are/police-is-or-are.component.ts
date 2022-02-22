import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-police-is-or-are',
  templateUrl: './police-is-or-are.component.html',
  styleUrls: ['./police-is-or-are.component.css']
})
export class PoliceIsOrAreComponent implements OnInit {
  oraciones = [
    {oracion: "Police is happy. ", estado: false, correcta: false, checked: false, respuesta: ''},
    // {oracion: "I hate people who are always complaining for everything.", estado: false, correcta: true, checked: false, respuesta: "false"},
    // {oracion: "I love my people. Puerto Rican people are the best people in the world. ", estado: false, correcta: true, checked: false, respuesta: "false"},
    // {oracion: "I can´t understand people who is against genetic modification. ", estado: false, correcta: false, checked: false, respuesta: "false"},
    // {oracion: "People are what they are. ", estado: false, correcta: true, checked: false, respuesta: "false"},
    // {oracion: "I know people who are working in Powell´s Mac at the moment.", estado: false, correcta: true, checked: false, respuesta: "false"},
    // {oracion: "Many more people is traveling overseas these days", estado: false, correcta: false, checked: false, respuesta: "false"},
    // {oracion: "At least 450.000 people are killed every year due to car accidents. ", estado: false, correcta: true, checked: false, respuesta: "false"},
    // {oracion: "Local people is trying to attract more tourists to the town.", estado: false, correcta: false, checked: false, respuesta: "false"},
    // {oracion: "People are hungry. ", estado: false, correcta: true, checked: false, respuesta: "false"}
  ]

  corregir = false;
  accion = "CORREGIR / CHECK RESULTS";
  c = 0;
  m = 0;
  result = 0;
  deshabilitar = true;
  correccion = false;

  constructor() { }

  ngOnInit(): void {
  }

  seleccion(i:number){
    this.oraciones[i].estado = !this.oraciones[i].estado;
    this.oraciones[i].checked = !this.oraciones[i].checked;
    this.deshabilitar = false;
  }

  click(){
    if (this.accion == "CORREGIR / CHECK RESULTS"){
      this.accion = "VOLVER";
      this.corregir = true;
      this.c = 0;
      this.m = 0;
      this.oraciones.forEach(oracion => {
        if (oracion.checked && oracion.correcta) this.c += 1.66;
        if (oracion.checked && oracion.correcta == false) this.m += 2.5;
      });

      if ((this.c - this.m) < 0) this.result = 0
      else this.result = Math.round(this.c - this.m);
    }
    else {
      this.accion = "CORREGIR / CHECK RESULTS";
      this.corregir = false;
      this.deshabilitar = true;
      
      this.oraciones = [
        {oracion: "Police is happy. ", estado: false, correcta: false, checked: false, respuesta: ''},
      //   {oracion: "I hate people who are always complaining for everything.", estado: false, correcta: true, checked: false, respuesta: "false"},
      //   {oracion: "I love my people. Puerto Rican people are the best people in the world. ", estado: false, correcta: true, checked: false, respuesta: "false"},
      //   {oracion: "I can´t understand people who is against genetic modification. ", estado: false, correcta: false, checked: false, respuesta: "false"},
      //   {oracion: "People are what they are. ", estado: false, correcta: true, checked: false, respuesta: "false"},
      //   {oracion: "I know people who are working in Powell´s Mac at the moment.", estado: false, correcta: true, checked: false, respuesta: "false"},
      //   {oracion: "Many more people is traveling overseas these days", estado: false, correcta: false, checked: false, respuesta: "false"},
      //   {oracion: "At least 450.000 people are killed every year due to car accidents. ", estado: false, correcta: true, checked: false, respuesta: "false"},
      //   {oracion: "Local people is trying to attract more tourists to the town.", estado: false, correcta: false, checked: false, respuesta: "false"},
      //   {oracion: "People are hungry. ", estado: false, correcta: true, checked: false, respuesta: "false"}
      ]

      this.correccion = false;
    }
  }
}
