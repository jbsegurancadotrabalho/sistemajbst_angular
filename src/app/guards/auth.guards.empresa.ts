import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthenticationHelper } from "../helpers/authentication.helper";

@Injectable({
    providedIn: 'root'
})
export class AuthGuardsEmpresa {

    constructor(
        private router: Router,
        private authenticationHelper: AuthenticationHelper
    ) {}

    canActivate(): boolean {
        // Verifica se o usuário está autenticado e tem a função 'empresa'
        const userId = this.authenticationHelper.getUserId();

        if (userId && this.hasEmpresaRole()) {
            return true;
        }

        // Redireciona para a página de login se não estiver autenticado ou não tiver a função 'empresa'
        this.router.navigate(['/acessar-conta']);
        return false;
    }

    private hasEmpresaRole(): boolean {
        // Obtém o usuário do seu auxiliar de autenticação
        const user = this.authenticationHelper.getData();

        // Ajuste os nomes das propriedades com base na estrutura real do PerfilModel
        return !!user && !!user.perfil && typeof user.perfil.nome === 'string' && user.perfil.nome.toLowerCase() === 'empresa';
    }
}
