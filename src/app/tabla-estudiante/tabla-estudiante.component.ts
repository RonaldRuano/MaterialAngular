import { Router } from '@angular/router';
import { MantenimientoService } from './../SERVICES/mantenimiento.service';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TablaEstudianteDataSource, TablaEstudianteItem } from './tabla-estudiante-datasource';

@Component({
  selector: 'app-tabla-estudiante',
  templateUrl: './tabla-estudiante.component.html',
  styleUrls: ['./tabla-estudiante.component.css']
})
export class TablaEstudianteComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<TablaEstudianteItem>;
  dataSource: TablaEstudianteDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'id_persona', 'nombre', 'apellido', 'fecha_nacimiento', 'direccion', 'carnet', 'fecha_ingreso', 'status', 'Acciones'];

  constructor(private MantenimientoService:MantenimientoService, private Router:Router) {
    this.dataSource = new TablaEstudianteDataSource();
  }

  ngOnInit(){
    this.dataSource = new TablaEstudianteDataSource();
    this.MantenimientoService.getestudiantes2().subscribe(
      res => {
        console.log(res);
        this.dataSource.data = res;

      }
    )

  }

  eliminarPersonas(id:number){
    console.log(id);
    this.MantenimientoService.deleteEstudiantes(id);
    this.Router.navigate(['/tabla-estudiante'])
  }

  modificar(id:string){
    this.Router.navigate(['/mmodificarestudiante/'+id])
  }


  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
