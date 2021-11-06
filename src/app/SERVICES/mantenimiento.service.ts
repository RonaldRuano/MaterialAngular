import { TablacursodocenteItem } from './../Coponontes/Cursodocente/tablacursodocente/tablacursodocente-datasource';
import { TablacursoestudianteItem } from './../Coponontes/Cursoestudiante/tablacursoestudiante/tablacursoestudiante-datasource';
import { TablacursosItem } from './../Coponontes/curso/tablacursos/tablacursos-datasource';
import { TablaMaestrosItem } from './../tabla-maestros/tabla-maestros-datasource';
import { TablaEstudianteItem } from './../tabla-estudiante/tabla-estudiante-datasource';
import { TablaPersonaItem } from './../tabla-persona/tabla-persona-datasource';
import { Estudiante } from './../tabla1/tabla1-datasource';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
import { TablaEstudiante2Item } from '../tabla-estudiante2/tabla-estudiante2-datasource';

@Injectable({
  providedIn: 'root'
})
export class MantenimientoService {

  url='https://stormy-brushlands-96603.herokuapp.com/inicio';
  url2='https://stormy-brushlands-96603.herokuapp.com/Personas';
  url3='https://stormy-brushlands-96603.herokuapp.com/Estudiantes';
  url4='https://stormy-brushlands-96603.herokuapp.com/Maestros';
  url5='https://stormy-brushlands-96603.herokuapp.com/cursos';
  url6='https://stormy-brushlands-96603.herokuapp.com/estudiante_curso';
  url7='https://stormy-brushlands-96603.herokuapp.com/curso_docente';


  constructor(private http:HttpClient) { }

  getprincipal():Observable<Estudiante[]>{
    return this.http.get<Estudiante[]>(this.url);
  }
//personas
  getpersonas():Observable<TablaPersonaItem[]>{
    return this.http.get<TablaPersonaItem[]>(this.url2);
  }

  getestudiantes2():Observable<TablaEstudianteItem[]>{
    return this.http.get<TablaEstudianteItem[]>(this.url3);
  }

  getestudiantes():Observable<TablaEstudiante2Item[]>{
    return this.http.get<TablaEstudiante2Item[]>(this.url3);
  }

  getmaestros():Observable<TablaMaestrosItem[]>{
    return this.http.get<TablaMaestrosItem[]>(this.url4);
  }

  deletePersonas(id:number){
    this.http.delete(this.url2+'/'+id).subscribe(
      res => console.log(res)
    )
  }

  getunestudiante(id:string){
    return this.http.get(this.url3+'/'+id);
  }

  editestudiante(id:string, Estudiante:TablaEstudianteItem){
    return this.http.put(this.url3+'/'+id,Estudiante);

  }

  deleteEstudiantes(id:number){
    this.http.delete(this.url3+'/'+id).subscribe(
      res => console.log(res)
    )
  }

  deleteMaestros(id:number){
    this.http.delete(this.url4+'/'+id).subscribe(
      res => console.log(res)
    )
  }

  getunapersona(id:string){
    return this.http.get(this.url2+'/'+id);
  }

  editpersona(id:string, Persona:TablaPersonaItem){
    return this.http.put(this.url2+'/'+id,Persona);

  }

  addpersona(Perosna:TablaPersonaItem){
    return this.http.post(this.url2, Perosna);

  }

  addestudiante(Estudiante:TablaEstudiante2Item){
    return this.http.post(this.url3, Estudiante);

  }

  addmaestro(Maesto:TablaMaestrosItem){
    return this.http.post(this.url4, Maesto);

  }

  getunmaestro(id:string){
    return this.http.get(this.url4+'/'+id);
  }

  editmaestro(id:string, Maestro:TablaMaestrosItem){
    return this.http.put(this.url4+'/'+id,Maestro);

  }

  //cursos
  getcursos():Observable<TablacursosItem[]>{
    return this.http.get<TablacursosItem[]>(this.url5);
  }

  addcurso(Perosna:TablacursosItem){
    return this.http.post(this.url5, Perosna);

  }

  deletecurso(id:number){
    this.http.delete(this.url5+'/'+id).subscribe(
      res => console.log(res)
    )
  }

  getuncurso(id:string){
    return this.http.get(this.url5+'/'+id);
  }
  editcurso(id:string, Persona:TablacursosItem){
    return this.http.put(this.url5+'/'+id,Persona);

  }

  //cursos-estudiante
  getcursosestudiante():Observable<TablacursoestudianteItem[]>{
    return this.http.get<TablacursoestudianteItem[]>(this.url6);
  }

  addcursoestudiante(Perosna:TablacursoestudianteItem){
    return this.http.post(this.url6, Perosna);

  }

  deletecursoestudiante(id:number){
    this.http.delete(this.url6+'/'+id).subscribe(
      res => console.log(res)
    )
  }

  getuncursoestudiante(id:string){
    return this.http.get(this.url6+'/'+id);
  }
  editcursoestudiante(id:string, Persona:TablacursoestudianteItem){
    return this.http.put(this.url6+'/'+id,Persona);

  }

  //cursos-docente
  getcursodocente():Observable<TablacursodocenteItem[]>{
    return this.http.get<TablacursodocenteItem[]>(this.url7);
  }

  addcursodocente(Perosna:TablacursodocenteItem){
    return this.http.post(this.url7, Perosna);

  }

  deletecursodocente(id:number){
    this.http.delete(this.url7+'/'+id).subscribe(
      res => console.log(res)
    )
  }

  getuncursodocente(id:string){
    return this.http.get(this.url7+'/'+id);
  }
  editcursodocente(id:string, Persona:TablacursodocenteItem){
    return this.http.put(this.url7+'/'+id,Persona);

  }


  form: FormGroup = new FormGroup({
    id: new FormControl(''),
    nombre: new FormControl(''),
    apellido: new FormControl(''),
    fecha_nacimiento: new FormControl(''),
    direccion: new FormControl('')

  });

}

