import { NgModule } from "@angular/core";
import { Routes, RouterModule} from '@angular/router';
import { IndustriaComponent } from "./pages/industria/industria.component";
import { AboutComponent } from "./pages/about/about.component";
import { ServicioComponent } from "./pages/servicio/servicio.component";
import { ContactoComponent } from "./pages/contacto/contacto.component";
import { DrillingComponent } from "./pages/drilling/drilling.component";
import { IngenieriaComponent } from "./pages/ingenieria/ingenieria.component";
import { InspeccionComponent } from "./pages/inspeccion/inspeccion.component";
import { NavegacionComponent } from "./pages/navegacion/navegacion.component";
import { PerforacionComponent } from "./pages/perforacion/perforacion.component";
import { MedicionComponent } from "./pages/medicion/medicion.component";

const app_routes: Routes = [

  {path: 'home', component: IndustriaComponent},
  {path: 'about', component: AboutComponent},
  {path: 'servicio', component: ServicioComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'drilling', component: DrillingComponent},
  {path: 'ingenieria', component: IngenieriaComponent},
  {path: 'inspeccion', component: InspeccionComponent},
  {path: 'navegacion', component: NavegacionComponent},
  {path: 'perforacion', component: PerforacionComponent},
  {path: 'medicion', component: MedicionComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}

];


@NgModule({

  imports: [
    RouterModule.forRoot( app_routes, {useHash: true })
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule {}


