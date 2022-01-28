import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  mostrarREsponsive_menu = false;
  mostrarREsponsive_nav = false;

  constructor( @Inject(DOCUMENT) public document: any) { }

  ngOnChange(){

  }

  ngOnInit(): void {
    
  }

}
