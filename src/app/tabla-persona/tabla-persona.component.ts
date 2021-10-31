import { Router } from '@angular/router';
import { MantenimientoService } from './../SERVICES/mantenimiento.service';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TablaPersonaDataSource, TablaPersonaItem } from './tabla-persona-datasource';

@Component({
  selector: 'app-tabla-persona',
  templateUrl: './tabla-persona.component.html',
  styleUrls: ['./tabla-persona.component.css']
})
export class TablaPersonaComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<TablaPersonaItem>;
  dataSource: TablaPersonaDataSource;

  listarpersonas!: TablaPersonaItem[];

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [ 'id', 'nombre', 'apellido', 'fecha_nacimiento', 'direccion' ,"Acciones"];

  constructor(private MantenimientoService:MantenimientoService, private Router:Router) {
    this.dataSource = new TablaPersonaDataSource();
  }

  ngOnInit(){
    this.dataSource = new TablaPersonaDataSource();

    this.MantenimientoService.getpersonas().subscribe(
    (res:any) => {
        console.log(res);
        this.dataSource.data = res;
      }
    )

  }

  eliminarPersonas(id:number){
    console.log(id);
    this.MantenimientoService.deletePersonas(id);
    this.Router.navigate(['/tabla-persona'])
  }

  modificar(id:string){
    this.Router.navigate(['/mmodificarpersona/'+id])
  }


  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
