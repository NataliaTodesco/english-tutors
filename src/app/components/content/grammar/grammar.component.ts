import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grammar',
  templateUrl: './grammar.component.html',
  styleUrls: ['./grammar.component.css']
})
export class GrammarComponent implements OnInit {
  seccion = "Orden de Adjetivos";

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.navigate(['/content/grammar/orden-adjetivos'])
  }

}
