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

  url='https://secure-ocean-51892.herokuapp.com/';
  url2='https://secure-ocean-51892.herokuapp.com/Personas';
  url3='https://secure-ocean-51892.herokuapp.com/Estudiantes';
  url4='https://secure-ocean-51892.herokuapp.com/Maestros';

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




  //get principal
  /*getprincipal(){
    return this.http.get(this.url);
  }*/

  /*/Mantenimiento tabla Personas
  getunboleto(id:string){
    return this.http.get(this.url+'/'+id);
  }*/

  /*/Crear
  addboleto(boleto:Pesona){
    return this.http.post(this.url, boleto);

  }*/

  /*/eliminar
  eliminarboleto(id:string){
    return this.http.delete(this.url+'/'+id);
  }*/



  /*/modificar
  editboleto(id:string, boleto:Pesona){
    return this.http.put(this.url+'/'+id,boleto);

  }*/

  form: FormGroup = new FormGroup({
    id: new FormControl(''),
    nombre: new FormControl(''),
    apellido: new FormControl(''),
    fecha_nacimiento: new FormControl(''),
    direccion: new FormControl('')

  });

}

