import { SidebarService } from './sidebar.service';
import { JwtTokenService } from '../../../../shared/services/jwt-token.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ISidebar } from '../models/sidebar.model';

@Injectable({
  providedIn: 'root',
})
export class RoleGuardService implements CanActivate {
  constructor(
    private jwtTokenService: JwtTokenService,
    private sidebarService: SidebarService
  ) {}
  private userRole;
  private validRoles: string[];
  private sidebarData:ISidebar[]
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    this.sidebarData = this.sidebarService.getSideBarData()

    let url = route.url[0].path;

    this.userRole = this.jwtTokenService.getRoles();
    let privileges: string[] = this.userRole['privilages'];

      this.validRoles = this.defineValidRoles(this.sidebarData, url);
 
    if (this.userRole['userRole'] === 'superAdmin') {
      return true;
    } else {
      return this.setPrivilages(this.validRoles,privileges)
    }
  }

  defineValidRoles(sideBarData: ISidebar[], url: string): string[] {
    let validRoles: string[] = [];
    sideBarData.forEach((sideBarItem) => {
      if (sideBarItem.route === url) {
        validRoles = sideBarItem.validRoles;
      } else if (sideBarItem.children) {
        sideBarItem.children.forEach((child: ISidebar) => {
          if (child.route === url) {
            validRoles = child.validRoles;
          }
        });
      }
      })
    return validRoles;
  }
  setPrivilages(validRoles,privileges) {
    const hasMatchingPrivilege = validRoles.some((privilege) => {
      const isMatch = privileges.includes(privilege);
      return isMatch;
    });

    return hasMatchingPrivilege;
  }
}
