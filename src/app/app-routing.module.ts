import { TablacursodocenteComponent } from './Coponontes/Cursodocente/tablacursodocente/tablacursodocente.component';
import { CursodocenteComponent } from './Coponontes/Cursodocente/cursodocente/cursodocente.component';
import { EditarcursodocenteComponent } from './Coponontes/Cursodocente/editarcursodocente/editarcursodocente.component';
import { CursoestudianteComponent } from './Coponontes/Cursoestudiante/cursoestudiante/cursoestudiante.component';
import { EditarcursoestucianteComponent } from './Coponontes/Cursoestudiante/editarcursoestuciante/editarcursoestuciante.component';
import { EditarcursoComponent } from './Coponontes/curso/editarcurso/editarcurso.component';
import { CrearcursoComponent } from './Coponontes/curso/crearcurso/crearcurso.component';
import { TablacursosComponent } from './Coponontes/curso/tablacursos/tablacursos.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
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
import { TablacursoestudianteComponent } from './Coponontes/Cursoestudiante/tablacursoestudiante/tablacursoestudiante.component';

const routes: Routes = [
  /*{path:'', redirectTo:'/tabla1', pathMatch:'full'},*/
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path:'tabla1', component:Tabla1Component, canActivate:[AuthGuard]},
  {path:'tabla-persona', component:TablaPersonaComponent, canActivate:[AuthGuard]},
  {path:'tabla-estudiante', component:TablaEstudianteComponent, canActivate:[AuthGuard]},
  {path:'tabla-estudiante2', component:TablaEstudiante2Component, canActivate:[AuthGuard]},
  {path:'tabla-maestro', component:TablaMaestrosComponent, canActivate:[AuthGuard]},
  {path:'fpersona', component:FpersonaComponent, canActivate:[AuthGuard]},
  {path:'festudiante', component:FestudianteComponent, canActivate:[AuthGuard]},
  {path:'fmaestro', component:FmaestrosComponent, canActivate:[AuthGuard]},
  {path:'mmodificarmaestro/:id', component:MmaestroComponent, canActivate:[AuthGuard]},
  {path:'mmodificarpersona/:id', component:MpersonaComponent, canActivate:[AuthGuard]},
  {path:'mmodificarestudiante/:id', component:MestudianteComponent, canActivate:[AuthGuard]},
  {path:'tabla-cursos', component:TablacursosComponent, canActivate:[AuthGuard]},
  {path:'Crearcurso', component:CrearcursoComponent, canActivate:[AuthGuard]},
  {path:'Editarcurso/:id', component:EditarcursoComponent, canActivate:[AuthGuard]},
  {path:'Editarcursoestudiante/:id', component:EditarcursoestucianteComponent, canActivate:[AuthGuard]},
  {path:'tabla-cursosestudiante', component:TablacursoestudianteComponent, canActivate:[AuthGuard]},
  {path:'Crearcursoestudiante', component:CursoestudianteComponent, canActivate:[AuthGuard]},
  {path:'Editarcursodocente/:id', component:EditarcursodocenteComponent, canActivate:[AuthGuard]},
  {path:'Crearcursodocente', component:CursodocenteComponent, canActivate:[AuthGuard]},
  {path:'tabla-cursodocente', component:TablacursodocenteComponent, canActivate:[AuthGuard]},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
