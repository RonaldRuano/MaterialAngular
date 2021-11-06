import { Router } from '@angular/router';
import { MantenimientoService } from './../../../SERVICES/mantenimiento.service';
import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { TablacursoestudianteItem } from '../tablacursoestudiante/tablacursoestudiante-datasource';

@Component({
  selector: 'app-cursoestudiante',
  templateUrl: './cursoestudiante.component.html',
  styleUrls: ['./cursoestudiante.component.css']
})
export class CursoestudianteComponent {

  addressForm!: FormGroup;
  constructor(private fb: FormBuilder, private MantenimientoService:MantenimientoService, private Router: Router) {
    this.addressForm = this.fb.group({
      id:[''],
      id_estudiante: ['', Validators.required],
      id_curso: ['', Validators.required],
      status: ['', Validators.required],
      fecha_inicio: ['', Validators.required],
      fecha_fin: ['', Validators.required]
    });
  }
  agregar(){
    delete this.addressForm.value.id;
  }


  onSubmit(){
    console.log(this.addressForm)
    const user: TablacursoestudianteItem ={
      id: this.addressForm.value.id,
      id_estudiante: this.addressForm.value.id_estudiante,
      id_curso: this.addressForm.value.id_curso,
      status: this.addressForm.value.status,
      fecha_inicio: this.addressForm.value.fecha_inicio,
      fecha_fin: this.addressForm.value.fecha_fin,
    }
    console.log(user)
    this.agregar();
    this.MantenimientoService.addcursoestudiante(user).subscribe();
    this.Router.navigate(['/tabla-cursosestudiante'])

  }
}
