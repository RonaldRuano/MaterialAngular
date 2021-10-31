import { MestudianteComponent } from './mestudiante/mestudiante.component';
import { MpersonaComponent } from './mpersona/mpersona.component';
import { MmaestroComponent } from './mmaestro/mmaestro.component';
import { FmaestrosComponent } from './fmaestros/fmaestros.component';
import { TablaMaestrosComponent } from './tabla-maestros/tabla-maestros.component';
import { TablaEstudiante2Item } from './tabla-estudiante2/tabla-estudiante2-datasource';
import { FestudianteComponent } from './festudiante/festudiante.component';
import { TablaEstudianteComponent } from './tabla-estudiante/tabla-estudiante.component';
import { FpersonaComponent } from './fpersona/fpersona.component';
import { TablaPersonaComponent } from './tabla-persona/tabla-persona.component';
import { Tabla1Component } from './tabla1/tabla1.component';
import { AgregarComponent } from './ComponentesEstudiante/agregar/agregar.component';
import { EditarComponent } from './ComponentesEstudiante/editar/editar.component';
import { InicioComponent } from './ComponentesEstudiante/inicio/inicio.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablaEstudiante2Component } from './tabla-estudiante2/tabla-estudiante2.component';

const routes: Routes = [
  {path:'', redirectTo:'/tabla1', pathMatch:'full'},
  {path:'tabla1', component:Tabla1Component},
  {path:'tabla-persona', component:TablaPersonaComponent},
  {path:'tabla-estudiante', component:TablaEstudianteComponent},
  {path:'tabla-estudiante2', component:TablaEstudiante2Component},
  {path:'tabla-maestro', component:TablaMaestrosComponent},
  {path:'fpersona', component:FpersonaComponent},
  {path:'festudiante', component:FestudianteComponent},
  {path:'fmaestro', component:FmaestrosComponent},
  {path:'mmodificarmaestro/:id', component:MmaestroComponent},
  {path:'mmodificarpersona/:id', component:MpersonaComponent},
  {path:'mmodificarestudiante/:id', component:MestudianteComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
