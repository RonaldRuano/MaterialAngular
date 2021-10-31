import { MantenimientoService } from './../../SERVICES/mantenimiento.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private MantenimientoService:MantenimientoService, private router:Router) { }

  ngOnInit(): void {
    this.listarequipo()
  }

  listarequipo()
  {
    this.MantenimientoService.getprincipal().subscribe(
      res=>{
        console.log(res)
      },
      err=> console.log(err)
    )
  }

}
