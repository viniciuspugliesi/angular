import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthSecurityService} from '../../security/auth-security.service';

@Injectable()
export class RedirectIfAuthenticatedGuard implements CanActivate {

    constructor(private authSecurityService: AuthSecurityService,
                private router: Router) {
    }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        this.authSecurityService.validateToken().subscribe((isAuthenticated: boolean) => {
            if (isAuthenticated) {
                this.router.navigate(['/']);
            }
        });

        return true;
    }
}
