import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthenticationHelper } from "../helpers/authentication.helper";

@Injectable({
    providedIn: 'root'
})
export class AuthGuardsAluno {

    constructor(
        private router: Router,
        private authenticationHelper: AuthenticationHelper
    ) {}

    canActivate(): boolean {
        // Verifica se o usuário está autenticado e tem a função 'aluno'
        const userId = this.authenticationHelper.getUserId();

        if (userId && this.hasAlunoRole()) {
            return true;
        }

        // Redireciona para a página de login se não estiver autenticado ou não tiver a função 'aluno'
        this.router.navigate(['/acessar-conta']);
        return false;
    }

    private hasAlunoRole(): boolean {
        // Obtém o usuário do seu auxiliar de autenticação
        const user = this.authenticationHelper.getData();

        // Ajuste os nomes das propriedades com base na estrutura real do PerfilModel
        return !!user && !!user.perfil && typeof user.perfil.nome === 'string' && user.perfil.nome.toLowerCase() === 'aluno particular';
    }
}
