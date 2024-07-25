import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthenticationHelper } from "../helpers/authentication.helper";


@Injectable({
    providedIn: 'root'
})

export class AuthGuardsMaster {

    constructor(
        private router: Router,
        private authenticationHelper: AuthenticationHelper
      ) {}
    
      canActivate(): boolean {
        // Check if the user is authenticated and has the 'master' role
        const userId = this.authenticationHelper.getUserId();
        
        if (userId && this.hasMasterRole()) {
          return true;
        }
    
        // Redirect to the login page if not authenticated or doesn't have the 'master' role
        this.router.navigate(['/acessar-conta']);
        return false;
      }
    
      private hasMasterRole(): boolean {
        // Get user from your authentication helper
        const user = this.authenticationHelper.getData();
      
        // Adjust the property names based on your actual PerfilModel structure
        return !! user && !!user.perfil && typeof user.perfil.nome === 'string' && user.perfil.nome.toLowerCase() === 'master';
      }
      
    }
