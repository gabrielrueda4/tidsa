import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

// RUTAS

import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { IndustriaComponent } from './pages/industria/industria.component';

import { AboutComponent } from './pages/about/about.component';
import { ServicioComponent } from './pages/servicio/servicio.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { PerforacionComponent } from './pages/perforacion/perforacion.component';
import { InspeccionComponent } from './pages/inspeccion/inspeccion.component';
import { IngenieriaComponent } from './pages/ingenieria/ingenieria.component';
import { NavegacionComponent } from './pages/navegacion/navegacion.component';
import { DrillingComponent } from './pages/drilling/drilling.component';
import { MedicionComponent } from './pages/medicion/medicion.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndustriaComponent,


    AboutComponent,
    ServicioComponent,
    ContactoComponent,
    PerforacionComponent,
    InspeccionComponent,

    IngenieriaComponent,
    NavegacionComponent,
    DrillingComponent,
    MedicionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
