import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vocabulary',
  templateUrl: './vocabulary.component.html',
  styleUrls: ['./vocabulary.component.css']
})
export class VocabularyComponent implements OnInit {
  seccion = "Au Pair";

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.navigate(['/content/vocabulary/au-pair'])
  }

}
