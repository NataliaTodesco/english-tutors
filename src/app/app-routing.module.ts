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
import { TarifasComponent } from './components/tarifas/tarifas.component';

const routes: Routes = [
  {path: '', component: HeadComponent},
  {path: 'examen', component: ExamenComponent},
  {path: 'tarifas', component: TarifasComponent},
  {path: 'content/homophones', component: HomophonesComponent},
  {path: 'content/ortography', component: OrtographyComponent},
  {path: 'content/grammar', component: GrammarComponent},
  {path: 'content/collocations', component: ColocationsComponent},
  {path: 'content/false-cognates', component: FalseCognatesComponent},
  {path: 'content/phonetics', component: PhoneticsComponent},
  {path: 'content/vocabulary', component: VocabularyComponent},
  {path: 'contact', component: ContactoComponent},
  {path: '**', component: HeadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
