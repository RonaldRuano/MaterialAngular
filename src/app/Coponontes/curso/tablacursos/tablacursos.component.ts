import { Router } from '@angular/router';
import { MantenimientoService } from './../../../SERVICES/mantenimiento.service';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TablacursosDataSource, TablacursosItem } from './tablacursos-datasource';

@Component({
  selector: 'app-tablacursos',
  templateUrl: './tablacursos.component.html',
  styleUrls: ['./tablacursos.component.css']
})
export class TablacursosComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<TablacursosItem>;
  dataSource: TablacursosDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'nombre', 'descripcion', 'Acciones'];

  constructor(private MantenimientoService:MantenimientoService, private Router:Router) {
    this.dataSource = new TablacursosDataSource();
  }

  ngOnInit(){
    this.dataSource = new TablacursosDataSource();

    this.MantenimientoService.getcursos().subscribe(
    (res:any) => {
        console.log(res);
        this.dataSource.data = res;
      }
    )

  }

  eliminarPersonas(id:number){
    console.log(id);
    this.MantenimientoService.deletecurso(id);
    this.Router.navigate(['/tabla-curso'])
  }

  modificar(id:string){
    this.Router.navigate(['/Editarcurso/'+id])
  }





  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
