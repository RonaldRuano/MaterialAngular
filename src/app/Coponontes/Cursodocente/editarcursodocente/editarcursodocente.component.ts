import { Router, ActivatedRoute } from '@angular/router';
import { MantenimientoService } from './../../../SERVICES/mantenimiento.service';
import { TablacursodocenteItem } from './../tablacursodocente/tablacursodocente-datasource';
import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-editarcursodocente',
  templateUrl: './editarcursodocente.component.html',
  styleUrls: ['./editarcursodocente.component.css']
})
export class EditarcursodocenteComponent {
  addressForm: FormGroup;
  uno: TablacursodocenteItem ={
    id:'',
    id_docente:'',
    id_curso:'',
    status:'',
    fecha_inicio:'',
    fecha_fin:'',
  }



  constructor(private fb: FormBuilder, private MantenimientoService:MantenimientoService, private Router: Router, private ActiveRoute:ActivatedRoute) {
    this.addressForm = this.fb.group({
      id:'',
      id_docente: ['', Validators.required],
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
      this.MantenimientoService.getuncursodocente(id_entrada).subscribe(
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
    this.MantenimientoService.editcursodocente(this.uno.id, this.uno).subscribe(
      res=>{
        console.log(res)
      },
      err=>console.log(err)

    );
    this.Router.navigate(['/tabla-cursodocente'])

  }
}
