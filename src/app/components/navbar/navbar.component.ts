import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  ruta = location.pathname;
  mostrarREsponsive_menu = false;

  constructor( @Inject(DOCUMENT) public document: any) { }

  ngOnChange(){
    this.ruta = location.pathname;
  }

  ngOnInit(): void {
    
  }

}
