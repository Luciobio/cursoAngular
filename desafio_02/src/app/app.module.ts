import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListadoEstudiantesComponent } from './components/listado-estudiantes/listado-estudiantes.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoEstudiantesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
