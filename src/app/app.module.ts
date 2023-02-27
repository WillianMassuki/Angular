import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { InputTextModule } from 'primeng/inputtext';

import { AppComponent } from './app.component';
import { EventoFormComponent } from './eventos/evento-form/evento-form.component';
import { EventosListaComponent } from './eventos/eventos-lista/eventos-lista.component';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import { FormsModule }   from '@angular/forms';
import { EventoService } from './eventos/Evento-Service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    EventoFormComponent,
    EventosListaComponent

  ],
  imports: [
    BrowserModule,
    CardModule,
    ButtonModule,
    TableModule,
    FormsModule,
    InputTextModule,
    HttpClientModule
  ],
  providers: [ EventoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
