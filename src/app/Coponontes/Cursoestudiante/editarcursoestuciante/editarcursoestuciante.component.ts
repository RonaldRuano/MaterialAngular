import { Router, ActivatedRoute } from '@angular/router';
import { MantenimientoService } from './../../../SERVICES/mantenimiento.service';
import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { TablacursoestudianteItem } from '../tablacursoestudiante/tablacursoestudiante-datasource';

@Component({
  selector: 'app-editarcursoestuciante',
  templateUrl: './editarcursoestuciante.component.html',
  styleUrls: ['./editarcursoestuciante.component.css']
})
export class EditarcursoestucianteComponent {
  addressForm: FormGroup;
  uno: TablacursoestudianteItem ={
    id:'',
    id_estudiante:'',
    id_curso:'',
    status:'',
    fecha_inicio:'',
    fecha_fin:'',
  }

  constructor(private fb: FormBuilder, private MantenimientoService:MantenimientoService, private Router: Router, private ActiveRoute:ActivatedRoute) {
    this.addressForm = this.fb.group({
      id:'',
      id_estudiante: ['', Validators.required],
      id_curso: ['', Validators.required],
      status: ['', Validators.required],
      fecha_inicio: ['', Validators.required],
      fecha_fin: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    const id_entrada =  <string>this.ActiveRoute.snapshot.params.id;

    console.log('Id de entrada:' +id_entrada);

    if(id_entrada){
      this.MantenimientoService.getuncursoestudiante(id_entrada).subscribe(
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
    this.MantenimientoService.editcursoestudiante(this.uno.id, this.uno).subscribe(
      res=>{
        console.log(res)
      },
      err=>console.log(err)

    );
    this.Router.navigate(['/tabla-cursosestudiante'])

  }


}
