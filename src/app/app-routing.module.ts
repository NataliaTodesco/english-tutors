import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ColocationsComponent } from './components/content/colocations/colocations.component';
import { FalseCognatesComponent } from './components/content/false-cognates/false-cognates.component';
import { GrammarComponent } from './components/content/grammar/grammar.component';
import { HomophonesComponent } from './components/content/homophones/homophones.component';
import { OrtographyComponent } from './components/content/ortography/ortography.component';
import { PhoneticsComponent } from './components/content/phonetics/phonetics.component';
import { AirportComponent } from './components/content/vocabulary/airport/airport.component';
import { AuPairComponent } from './components/content/vocabulary/au-pair/au-pair.component';
import { MoneyComponent } from './components/content/vocabulary/money/money.component';
import { USvsUKComponent } from './components/content/vocabulary/usvs-uk/usvs-uk.component';
import { VocabularyComponent } from './components/content/vocabulary/vocabulary.component';
import { ExamenComponent } from './components/examen/examen.component';
import { CapitalizationComponent } from './components/content/grammar/capitalization/capitalization.component';
import { IndefinitePronounsComponent } from './components/content/grammar/indefinite-pronouns/indefinite-pronouns.component';
import { OrdenAdjetivosComponent } from './components/content/grammar/orden-adjetivos/orden-adjetivos.component';
import { PeopleIsOrAreComponent } from './components/content/grammar/people-is-or-are/people-is-or-are.component';
import { PoliceIsOrAreComponent } from './components/content/grammar/police-is-or-are/police-is-or-are.component';
import { VerboBEComponent } from './components/content/grammar/verbo-be/verbo-be.component';
import { HeadComponent } from './components/head/head.component';
import { TarifasComponent } from './components/tarifas/tarifas.component';
import { TiposComponent } from './components/tarifas/tipos/tipos.component';
import { GrupalesComponent } from './components/tarifas/grupales/grupales.component';
import { IndividualesComponent } from './components/tarifas/individuales/individuales.component';
import { IntensivoComponent } from './components/tarifas/grupales/intensivo/intensivo.component';
import { RegularComponent } from './components/tarifas/grupales/regular/regular.component';
import { TipoComponent } from './components/tarifas/grupales/tipo/tipo.component';
import { RecursosComponent } from './components/recursos/recursos.component';
import { ContentComponent } from './components/content/content.component';
import { ContenidoComponent } from './components/contenido/contenido.component';
import { TransportComponent } from './components/content/vocabulary/transport/transport.component';

const routes: Routes = [
  {path: '', component: HeadComponent},
  {path: 'examen', component: ExamenComponent},
  {path: 'tarifas', component: TarifasComponent, children:[
    {path: '', component: TiposComponent},
    {path: 'grupales', component: GrupalesComponent, children: [
      {path: '', component: TipoComponent},
      {path: 'intensivo', component:IntensivoComponent},
      {path: 'regular', component: RegularComponent}
    ]},
    {path: 'individuales', component: IndividualesComponent},
  ]},
  {path: 'content', component: ContenidoComponent},
  {path: 'content/homophones', component: HomophonesComponent},
  {path: 'content/ortography', component: OrtographyComponent},
  {path: 'content/grammar', component: GrammarComponent, children: [
    {path: 'orden-adjetivos', component: OrdenAdjetivosComponent},
    {path: 'people-is-or-are', component: PeopleIsOrAreComponent},
    {path: 'police-is-or-are', component: PoliceIsOrAreComponent},
    {path: 'verboBE', component: VerboBEComponent},
    {path: 'indefinitePronouns', component: IndefinitePronounsComponent},
    {path: 'capitalization', component: CapitalizationComponent}
  ]},
  {path: 'content/collocations', component: ColocationsComponent},
  {path: 'content/false-cognates', component: FalseCognatesComponent},
  {path: 'content/phonetics', component: PhoneticsComponent},
  {path: 'content/vocabulary', component: VocabularyComponent, children: [
    {path: 'au-pair', component: AuPairComponent},
    {path: 'airport', component: AirportComponent},
    {path: 'money', component: MoneyComponent},
    {path: 'USvsUK', component: USvsUKComponent},
    {path: 'transport', component: TransportComponent}
  ]},
  {path: 'contact', component: ContactoComponent},
  {path: 'recursos', component: RecursosComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
