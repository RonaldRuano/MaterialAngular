import { MantenimientoService } from './../../../SERVICES/mantenimiento.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TablacursosItem } from './../tablacursos/tablacursos-datasource';
import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-editarcurso',
  templateUrl: './editarcurso.component.html',
  styleUrls: ['./editarcurso.component.css']
})
export class EditarcursoComponent {
  addressForm: FormGroup;
  uno: TablacursosItem ={
    id:'',
    nombre:'',
    descripcion:'',
  }

  constructor(private fb: FormBuilder, private Router:Router, private MantenimientoService:MantenimientoService, private ActiveRoute:ActivatedRoute) {
    this.addressForm = this.fb.group({
      id:'',
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    const id_entrada =  <string>this.ActiveRoute.snapshot.params.id;

    console.log('Id de entrada:' +id_entrada);

    if(id_entrada){
      this.MantenimientoService.getuncurso(id_entrada).subscribe(
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
    this.MantenimientoService.editcurso(this.uno.id, this.uno).subscribe(
      res=>{
        console.log(res)
      },
      err=>console.log(err)

    );
    this.Router.navigate(['/tabla-cursos'])

  }


}
