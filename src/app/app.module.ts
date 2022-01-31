import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeadComponent } from './components/head/head.component';
import { ExamenComponent } from './components/examen/examen.component';
import { ContentComponent } from './components/content/content.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HomophonesComponent } from './components/content/homophones/homophones.component';
import { OrtographyComponent } from './components/content/ortography/ortography.component';
import { GrammarComponent } from './components/content/grammar/grammar.component';
import { ColocationsComponent } from './components/content/colocations/colocations.component';
import { VocabularyComponent } from './components/content/vocabulary/vocabulary.component';
import { FalseCognatesComponent } from './components/content/false-cognates/false-cognates.component';
import { PhoneticsComponent } from './components/content/phonetics/phonetics.component';
import { FooterComponent } from './components/footer/footer.component';
import { TarifasComponent } from './components/tarifas/tarifas.component';
import { AirportComponent } from './components/content/vocabulary/airport/airport.component';
import { AuPairComponent } from './components/content/vocabulary/au-pair/au-pair.component';
import { MoneyComponent } from './components/content/vocabulary/money/money.component';
import { USvsUKComponent } from './components/content/vocabulary/usvs-uk/usvs-uk.component';
import { OrdenAdjetivosComponent } from './components/content/grammar/orden-adjetivos/orden-adjetivos.component';
import { PeopleIsOrAreComponent } from './components/content/grammar/people-is-or-are/people-is-or-are.component';
import { PoliceIsOrAreComponent } from './components/content/grammar/police-is-or-are/police-is-or-are.component';
import { VerboBEComponent } from './components/content/grammar/verbo-be/verbo-be.component';
import { IndefinitePronounsComponent } from './components/content/grammar/indefinite-pronouns/indefinite-pronouns.component';
import { CapitalizationComponent } from './components/content/grammar/capitalization/capitalization.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeadComponent,
    ExamenComponent,
    ContentComponent,
    ContactoComponent,
    HomophonesComponent,
    OrtographyComponent,
    GrammarComponent,
    ColocationsComponent,
    VocabularyComponent,
    FalseCognatesComponent,
    PhoneticsComponent,
    FooterComponent,
    TarifasComponent,
    AirportComponent,
    AuPairComponent,
    MoneyComponent,
    USvsUKComponent,
    OrdenAdjetivosComponent,
    PeopleIsOrAreComponent,
    PoliceIsOrAreComponent,
    VerboBEComponent,
    IndefinitePronounsComponent,
    CapitalizationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
