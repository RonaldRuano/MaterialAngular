import { TablaPersonaItem } from './../tabla-persona/tabla-persona-datasource';
import { Router } from '@angular/router';
import { MantenimientoService } from './../SERVICES/mantenimiento.service';
import { not } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-fpersona',
  templateUrl: './fpersona.component.html',
  styleUrls: ['./fpersona.component.css']
})
export class FpersonaComponent {
  addressForm!: FormGroup;

  /*addressForm = this.fb.group({

    id: [null, Validators.required],
    nombre: [null, Validators.required],
    apellido: [null, Validators.required],
    fecha_nacimiento: [null, Validators.required],
    direccion: [null, Validators.required]

  });*/

  constructor(private fb: FormBuilder, private Router:Router, private MantenimientoService:MantenimientoService) {
    this.addressForm = this.fb.group({
      id:[''],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      fecha_nacimiento: ['', Validators.required],
      direccion: ['', Validators.required]

    });
  }

  agregar(){
    delete this.addressForm.value.id;
  }


  onSubmit(){
    console.log(this.addressForm)
    const user: TablaPersonaItem ={
      id: this.addressForm.value.id,
      nombre: this.addressForm.value.nombre,
      apellido: this.addressForm.value.apellido,
      fecha_nacimiento: this.addressForm.value.fecha_nacimiento,
      direccion: this.addressForm.value.direccion
    }
    console.log(user)
    this.agregar();
    this.MantenimientoService.addpersona(user).subscribe();
    this.Router.navigate(['/tabla-persona'])

  }
}
