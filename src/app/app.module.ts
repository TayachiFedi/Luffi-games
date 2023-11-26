import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AjoutComponent } from './ajout/ajout.component';
import { ListHeroesComponent } from './list-heroes/list-heroes.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
/**
 * The main module of the application.
 */
@NgModule({
  declarations: [
    AppComponent,
    AjoutComponent,
    ListHeroesComponent,
    AppComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
