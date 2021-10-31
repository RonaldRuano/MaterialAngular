import { TablaMaestrosItem } from './../tabla-maestros/tabla-maestros-datasource';
import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MantenimientoService } from '../SERVICES/mantenimiento.service';

@Component({
  selector: 'app-fmaestros',
  templateUrl: './fmaestros.component.html',
  styleUrls: ['./fmaestros.component.css']
})
export class FmaestrosComponent {
  addressForm: FormGroup;

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
      id:[''],
      id_persona: ['', Validators.required],
      fecha_ingreso: ['', Validators.required],
      fecha_nacimiento: [''],
      nombre: [''],
      apellido: [''],
      direccion: [''],
    });
  }
  agregar(){
    delete this.addressForm.value.id,
    delete this.addressForm.value.fecha_nacimiento,
    delete this.addressForm.value.nombre,
    delete this.addressForm.value.apellido,
    delete this.addressForm.value.direccion
  }

  onSubmit(){
    console.log(this.addressForm)
    const user: TablaMaestrosItem ={
      id: this.addressForm.value.id,
      id_persona: this.addressForm.value.id_persona,
      fecha_ingreso: this.addressForm.value.fecha_ingreso,
      fecha_nacimiento: this.addressForm.value.fecha_nacimiento,
      nombre: this.addressForm.value.nombre,
      apellido: this.addressForm.value.apellido,
      direccion: this.addressForm.value.direccion
    }
    console.log(user)
    this.agregar();
    this.MantenimientoService.addmaestro(user).subscribe();
    this.Router.navigate(['/tabla-maestro'])
  }
  modificar(){

  }
}
