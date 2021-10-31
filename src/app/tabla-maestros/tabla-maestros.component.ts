import { Router } from '@angular/router';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { MantenimientoService } from '../SERVICES/mantenimiento.service';
import { TablaMaestrosDataSource, TablaMaestrosItem } from './tabla-maestros-datasource';

@Component({
  selector: 'app-tabla-maestros',
  templateUrl: './tabla-maestros.component.html',
  styleUrls: ['./tabla-maestros.component.css']
})
export class TablaMaestrosComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<TablaMaestrosItem>;
  dataSource: TablaMaestrosDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'id_persona', 'nombre', 'apellido', 'fecha_nacimiento', 'direccion', 'fecha_ingreso', 'Acciones' ];

  constructor(private MantenimientoService:MantenimientoService, private Router:Router) {
    this.dataSource = new TablaMaestrosDataSource();
  }
  ngOnInit(){
    this.dataSource = new TablaMaestrosDataSource();
    this.MantenimientoService.getmaestros().subscribe(
      res => {
        console.log(res);
        this.dataSource.data = res;

      }
    )

  }

  eliminarPersonas(id:number){
    console.log(id);
    this.MantenimientoService.deleteMaestros(id);
    this.Router.navigate(['/tabla-maestro'])
  }

  modificar(id:string){
    this.Router.navigate(['/mmodificarmaestro/'+id])
  }


  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
