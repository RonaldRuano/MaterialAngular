import { TablaPersonaItem } from './../tabla-persona/tabla-persona-datasource';
import { MantenimientoService } from './../SERVICES/mantenimiento.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mpersona',
  templateUrl: './mpersona.component.html',
  styleUrls: ['./mpersona.component.css']
})
export class MpersonaComponent {

  addressForm: FormGroup;
  uno: TablaPersonaItem ={
    id:'',
    nombre:'',
    apellido:'',
    direccion:'',
    fecha_nacimiento:''
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
      this.MantenimientoService.getunapersona(id_entrada).subscribe(
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
    this.MantenimientoService.editpersona(this.uno.id, this.uno).subscribe(
      res=>{
        console.log(res)
      },
      err=>console.log(err)

    );
    this.Router.navigate(['/tabla-persona'])

  }
}
