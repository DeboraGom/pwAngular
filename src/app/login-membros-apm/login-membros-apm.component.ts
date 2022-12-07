import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { Observable } from 'rxjs/internal/Observable';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-login-membros-apm',
  templateUrl: './login-membros-apm.component.html',
  styleUrls: ['./login-membros-apm.component.css']
})
export class LoginMembrosAPMComponent {
   constructor(private httpClient: HttpClient) { }
   apiUrl = "https://sapm-angular.free.beeceptor.com/login";

    msgAlerta: string = "";

    user: Usuario = new Usuario();
    email = '';
    senha = '';
    
    public getLogin(): Observable<any> {
      return this.httpClient.get(this.apiUrl);
    }

    logar()
    {this.getLogin().subscribe(d => {this.user = d;}); alert(this.user);
      if (this.user.email == this.email && this.user.senha == this.senha) 
      {
          this.msgAlerta = "Login feito com sucesso!";
      } 
      else 
      {
        this.msgAlerta = "E-mail ou a senha estar errado!"; 
      }
    }

    ngOnInit() {
      this.getLogin().subscribe(d => {this.user = d;});
    }
}
