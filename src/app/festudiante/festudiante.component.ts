import { TablaEstudianteItem } from './../tabla-estudiante/tabla-estudiante-datasource';
import { MantenimientoService } from './../SERVICES/mantenimiento.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { TablaEstudiante2Item } from '../tabla-estudiante2/tabla-estudiante2-datasource';

@Component({
  selector: 'app-festudiante',
  templateUrl: './festudiante.component.html',
  styleUrls: ['./festudiante.component.css']
})
export class FestudianteComponent {
  addressForm!: FormGroup;

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



  constructor(private fb: FormBuilder, private Router:Router, private MantenimientoService:MantenimientoService) {
    this.addressForm = this.fb.group({
      id:[''],
      id_persona: ['', Validators.required],
      fecha_ingreso: ['', Validators.required],
      carnet: ['', Validators.required],
      status: ['', Validators.required],
    });
  }
  agregar(){
    delete this.addressForm.value.id
  }

  onSubmit() {
    console.log(this.addressForm)
    const user: TablaEstudiante2Item ={

      id_persona: this.addressForm.value.id_persona,
      fecha_ingreso: this.addressForm.value.fecha_ingreso,
      carnet: this.addressForm.value.carnet,
      status: this.addressForm.value.status,
      id: this.addressForm.value.id
    }
    console.log(user)
    this.agregar();
    this.MantenimientoService.addestudiante(user).subscribe();
    this.Router.navigate(['/tabla-estudiante'])
  }

}
