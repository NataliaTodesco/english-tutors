import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ColocationsComponent } from './components/content/colocations/colocations.component';
import { FalseCognatesComponent } from './components/content/false-cognates/false-cognates.component';
import { GrammarComponent } from './components/content/grammar/grammar.component';
import { HomophonesComponent } from './components/content/homophones/homophones.component';
import { OrtographyComponent } from './components/content/ortography/ortography.component';
import { PhoneticsComponent } from './components/content/phonetics/phonetics.component';
import { VocabularyComponent } from './components/content/vocabulary/vocabulary.component';
import { ExamenComponent } from './components/examen/examen.component';
import { HeadComponent } from './components/head/head.component';

const routes: Routes = [
  {path: '', component: HeadComponent},
  {path: 'examen', component: ExamenComponent},
  //{path: 'examen', component: ExamenComponent},
  {path: 'content', component: ExamenComponent, children: [
    {path: 'homophones', component: HomophonesComponent},
    {path: 'ortography', component: OrtographyComponent},
    {path: 'grammar', component: GrammarComponent},
    {path: 'collocations', component: ColocationsComponent},
    {path: 'false-cognates', component: FalseCognatesComponent},
    {path: 'phonetics', component: PhoneticsComponent},
    {path: 'vocabulary', component: VocabularyComponent}
  ]},
  {path: 'contact', component: ContactoComponent},
  {path: '**', component: HeadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
