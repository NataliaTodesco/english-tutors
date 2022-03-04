import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ortography',
  templateUrl: './ortography.component.html',
  styleUrls: ['./ortography.component.css']
})
export class OrtographyComponent implements OnInit {
  palabras1 = [{palabra: "Color", select:false, correcta:true},{palabra: "Mom", select:false, correcta:true},
  {palabra: "Tyre", select:false, correcta:false},{palabra: "Pyjamas", select:false, correcta:false},
  {palabra: "Favorite", select:false, correcta:true},{palabra: "Humor", select:false, correcta:true},
  {palabra: "Neighbour", select:false, correcta:false}]

  palabras2 = [{palabra: "Cheque", select:false, correcta:false},{palabra: "Grey", select:false, correcta:false},
  {palabra: "Center", select:false, correcta:true},{palabra: "Theater", select:false, correcta:true},
  {palabra: "Flavor", select:false, correcta:true},{palabra: "Apologise", select:false, correcta:false}]

  accion = "CORREGIR";
  c = 0;
  m = 0;
  result = 0;
  corregir = false;

  constructor() { }

  ngOnInit(): void {
  }
  click(){
    if (this.accion == "CORREGIR"){
      this.accion = "VOLVER";
      this.corregir = true;
      this.c = 0;
      this.m = 0;

      this.palabras1.forEach(oracion => {
        if (oracion.select && oracion.correcta) this.c += 1.428;
        if (oracion.select && oracion.correcta == false) this.m += 1.428;
      });
      this.palabras2.forEach(oracion => {
        if (oracion.select && oracion.correcta) this.c += 1.428;
        if (oracion.select && oracion.correcta == false) this.m += 1.428;
      });

      if ((this.c - this.m) < 0) this.result = 0
      else this.result = Math.round(this.c - this.m);
    }
    else {
      this.accion = "CORREGIR";
      this.corregir = false;
      
      this.palabras1 = [{palabra: "Color", select:false, correcta:true},{palabra: "Mom", select:false, correcta:true},
      {palabra: "Tyre", select:false, correcta:false},{palabra: "Pyjamas", select:false, correcta:false},
      {palabra: "Favorite", select:false, correcta:true},{palabra: "Humor", select:false, correcta:true},
      {palabra: "Neighbour", select:false, correcta:false}]
    
      this.palabras2 = [{palabra: "Cheque", select:false, correcta:false},{palabra: "Grey", select:false, correcta:false},
      {palabra: "Center", select:false, correcta:true},{palabra: "Theater", select:false, correcta:true},
      {palabra: "Flavor", select:false, correcta:true},{palabra: "Apologise", select:false, correcta:false}]

      this.corregir = false;
    }
  }
}
