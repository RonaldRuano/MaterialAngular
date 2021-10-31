import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InicioComponent } from './ComponentesEstudiante/inicio/inicio.component';
import { AgregarComponent } from './ComponentesEstudiante/agregar/agregar.component';
import { EditarComponent } from './ComponentesEstudiante/editar/editar.component';
import { BarraComponent } from './barra/barra.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Tabla1Component } from './tabla1/tabla1.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { TablaPersonaComponent } from './tabla-persona/tabla-persona.component';
import { FpersonaComponent } from './fpersona/fpersona.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { TablaEstudianteComponent } from './tabla-estudiante/tabla-estudiante.component';
import { FestudianteComponent } from './festudiante/festudiante.component';
import { TablaEstudiante2Component } from './tabla-estudiante2/tabla-estudiante2.component';
import { TablaMaestrosComponent } from './tabla-maestros/tabla-maestros.component';
import { FmaestrosComponent } from './fmaestros/fmaestros.component';
import { MmaestroComponent } from './mmaestro/mmaestro.component';
import { MpersonaComponent } from './mpersona/mpersona.component';
import { MestudianteComponent } from './mestudiante/mestudiante.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    AgregarComponent,
    EditarComponent,
    BarraComponent,
    Tabla1Component,
    TablaPersonaComponent,
    FpersonaComponent,
    TablaEstudianteComponent,
    FestudianteComponent,
    TablaEstudiante2Component,
    TablaMaestrosComponent,
    FmaestrosComponent,
    MmaestroComponent,
    MpersonaComponent,
    MestudianteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
