import { Router } from '@angular/router';
import { SeguridadService } from './../SERVICES/seguridad.service';
import { Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {user} from 'src/app/SERVICES/seguridad.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: user = {
    id: 0,
    nombre: '',
    contrasena: ''
  };
  addressForm = this.fb.group({

    id: [""],
    nombre: [null, Validators.required],
    contrasena: [null, Validators.required],

  });

  constructor(private fb: FormBuilder, private seguridad: SeguridadService, private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(){
    this.seguridad.login(this.user).subscribe(
      (res) =>{
        localStorage.setItem('token', res.token);
        this.router.navigate(['tabla1']);
      }
    )
  }

}
