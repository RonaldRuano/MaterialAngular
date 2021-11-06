import { TablacursosItem } from './../tablacursos/tablacursos-datasource';
import { MantenimientoService } from './../../../SERVICES/mantenimiento.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-crearcurso',
  templateUrl: './crearcurso.component.html',
  styleUrls: ['./crearcurso.component.css']
})
export class CrearcursoComponent {
  addressForm!: FormGroup;



  constructor(private fb: FormBuilder, private Router:Router, private MantenimientoService:MantenimientoService) {

    this.addressForm = this.fb.group({
      id:[''],
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required]
    });

  }
  agregar(){
    delete this.addressForm.value.id;
  }


  onSubmit(){
    console.log(this.addressForm)
    const user: TablacursosItem ={
      id: this.addressForm.value.id,
      nombre: this.addressForm.value.nombre,
      descripcion: this.addressForm.value.descripcion
    }
    console.log(user)
    this.agregar();
    this.MantenimientoService.addcurso(user).subscribe();
    this.Router.navigate(['/tabla-cursos'])

  }


}
