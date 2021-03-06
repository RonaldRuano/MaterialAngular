import { TablacursodocenteItem } from './../tablacursodocente/tablacursodocente-datasource';
import { Router } from '@angular/router';
import { MantenimientoService } from './../../../SERVICES/mantenimiento.service';
import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cursodocente',
  templateUrl: './cursodocente.component.html',
  styleUrls: ['./cursodocente.component.css']
})
export class CursodocenteComponent {
  addressForm!: FormGroup;

  constructor(private fb: FormBuilder, private MantenimientoService:MantenimientoService, private Router:Router) {
    this.addressForm = this.fb.group({
      id:[''],
      id_docente: ['', Validators.required],
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
    const user: TablacursodocenteItem ={
      id: this.addressForm.value.id,
      id_docente: this.addressForm.value.id_docente,
      id_curso: this.addressForm.value.id_curso,
      status: this.addressForm.value.status,
      fecha_inicio: this.addressForm.value.fecha_inicio,
      fecha_fin: this.addressForm.value.fecha_fin,
    }
    console.log(user)
    this.agregar();
    this.MantenimientoService.addcursodocente(user).subscribe();
    this.Router.navigate(['/tabla-cursodocente'])

  }
}
