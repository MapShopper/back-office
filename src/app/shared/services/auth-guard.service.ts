import { JwtTokenService } from './jwt-token.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  GuardResult,
  MaybeAsync,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(
    private jwtTokenService:JwtTokenService,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    let token = this.localStorageService.get('token');
    if (route.data['guardFor'] === 'auth') {
      if (!token) return true;
      else {
        this.router.navigate(['/landing']);
        this.jwtTokenService.setToken(token)
        return false;
      }
    } else if (route.data['guardFor'] === 'landing') {
      if (token) {
        this.jwtTokenService.setToken(token)
        // console.log(this.jwtTokenService.decodedToken);
        return true;
      } else {
        this.router.navigate(['/auth']);
        return false;
      }
    } else return false;
  }
}
