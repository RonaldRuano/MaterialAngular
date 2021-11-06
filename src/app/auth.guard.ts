import { SeguridadService } from './SERVICES/seguridad.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private seguridad:SeguridadService, private Router: Router ){}

  canActivate(): boolean{
    if(this.seguridad.logedIn()){
      return true;
    }
    this.Router.navigate(['login']);
    return false;

  }




}
