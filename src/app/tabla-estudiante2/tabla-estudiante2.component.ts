import { Router } from '@angular/router';
import { MantenimientoService } from './../SERVICES/mantenimiento.service';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TablaEstudiante2DataSource, TablaEstudiante2Item } from './tabla-estudiante2-datasource';

@Component({
  selector: 'app-tabla-estudiante2',
  templateUrl: './tabla-estudiante2.component.html',
  styleUrls: ['./tabla-estudiante2.component.css']
})
export class TablaEstudiante2Component implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<TablaEstudiante2Item>;
  dataSource: TablaEstudiante2DataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id','id_persona', 'carnet', 'fecha_ingreso', 'status', 'Accione'];

  constructor(private MantenimientoService:MantenimientoService, private Router:Router) {
    this.dataSource = new TablaEstudiante2DataSource();
  }

  ngOnInit(){
    this.dataSource = new TablaEstudiante2DataSource();
    this.MantenimientoService.getestudiantes().subscribe(
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

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
