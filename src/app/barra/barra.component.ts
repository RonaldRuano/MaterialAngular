import { SeguridadService } from './../SERVICES/seguridad.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.css']
})
export class BarraComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private Router:Router, private SeguridadService:SeguridadService) {}

  logedIn(){
    return this.SeguridadService.logedIn();
  }

  onLogout(){
       this.SeguridadService.logout();
       this.Router.navigate(['login']);
  }

}
