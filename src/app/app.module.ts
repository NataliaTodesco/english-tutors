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
    PhoneticsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
