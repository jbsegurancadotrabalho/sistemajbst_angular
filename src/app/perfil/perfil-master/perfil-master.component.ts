import { Component, OnInit } from '@angular/core';
import { AutenticarResponseModel } from 'src/app/models/usuarios/autenticar-response.model';
import { Router, RouterLink } from '@angular/router';
import { AuthenticationHelper } from 'src/app/helpers/authentication.helper';
@Component({
  selector: 'app-perfil-master',
  templateUrl: './perfil-master.component.html',
  styleUrls: ['./perfil-master.component.css']
})
export class PerfilMasterComponent implements OnInit{
  usuario: AutenticarResponseModel | null = null;


  //construtor
  constructor(
    private authenticationHelper: AuthenticationHelper,
    private router: Router
  ){}

  ngOnInit(): void {
    //capturar os dados do usuário autenticado
    this.usuario = this.authenticationHelper.getData();
  }

  sair(): void {
    if(confirm('Deseja realmente sair do sistema?')) {


      //apagar os dados da local storage
      this.authenticationHelper.signOut();


      //redirecionar para a página de login
      this.router.navigate(['/acessar-conta'])
        .then(() => {
          window.location.reload();
        });
    }
  }

}
