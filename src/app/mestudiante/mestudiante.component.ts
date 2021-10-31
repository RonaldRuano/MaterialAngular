import { MantenimientoService } from './../SERVICES/mantenimiento.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TablaEstudianteItem } from './../tabla-estudiante/tabla-estudiante-datasource';
import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mestudiante',
  templateUrl: './mestudiante.component.html',
  styleUrls: ['./mestudiante.component.css']
})
export class MestudianteComponent {
  addressForm: FormGroup;
  uno: TablaEstudianteItem ={
    id: '',
    id_persona: '',
    nombre: '',
    apellido: '',
    direccion: '',
    status: '',
    fecha_nacimiento: '',
    fecha_ingreso: '',
    carnet:''
  }

  /*addressForm = this.fb.group({
    company: null,
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    address: [null, Validators.required],
    address2: null,
    city: [null, Validators.required],
    state: [null, Validators.required],
    postalCode: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    ],
    shipping: ['free', Validators.required]
  });*/


  constructor(private fb: FormBuilder, private Router:Router, private MantenimientoService:MantenimientoService, private ActiveRoute:ActivatedRoute) {
    this.addressForm = this.fb.group({
      id:'',
      id_persona: ['', Validators.required],
      fecha_ingreso: ['', Validators.required],
      fecha_nacimiento: [''],
      nombre: [''],
      apellido: [''],
      direccion: [''],
    });
  }

  ngOnInit(): void {
    const id_entrada =  <string>this.ActiveRoute.snapshot.params.id;

    console.log('Id de entrada:' +id_entrada);

    if(id_entrada){
      this.MantenimientoService.getunestudiante(id_entrada).subscribe(
      (res:any)=>{

          this.uno=<any>res[0];
          console.log(res[0])

        },
        err=>console.log(err)

      );
    }
  }


  onSubmit(): void {
    this.MantenimientoService
    this.MantenimientoService.editestudiante(this.uno.id, this.uno).subscribe(
      res=>{
        console.log(res)
      },
      err=>console.log(err)

    );
    this.Router.navigate(['/tabla-estudiante'])
  }
}
