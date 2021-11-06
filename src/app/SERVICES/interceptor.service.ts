import { SeguridadService } from './seguridad.service';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private SeguridadService:SeguridadService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const tokenReq = req.clone({
      setHeaders:{
        Authorization : 'Bearer '+ this.SeguridadService.getToken()
      }
    });
    return next.handle(tokenReq);
  }
}
