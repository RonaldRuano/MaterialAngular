import { MantenimientoService } from './../SERVICES/mantenimiento.service';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Tabla1DataSource, Estudiante } from './tabla1-datasource';

@Component({
  selector: 'app-tabla1',
  templateUrl: './tabla1.component.html',
  styleUrls: ['./tabla1.component.css']
})
export class Tabla1Component implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Estudiante>;
  dataSource: Tabla1DataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['nombre', 'apellido', 'carnet'];

  constructor(private MantenimientoService:MantenimientoService) {
    this.dataSource = new Tabla1DataSource();
  }

  ngOnInit() {
    this.dataSource = new Tabla1DataSource();
    this.MantenimientoService.getprincipal().subscribe(
      res => {
        console.log(res);
        this.dataSource.data = res;

      }
    )

  }



  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
