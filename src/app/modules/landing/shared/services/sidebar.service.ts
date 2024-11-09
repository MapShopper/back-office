import { Injectable } from '@angular/core';
import { ISidebar } from '../models/sidebar.model';
import { BehaviorSubject, filter } from 'rxjs';
import {
  ActivatedRoute,
  GuardsCheckEnd,
  GuardsCheckStart,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationSkipped,
  NavigationStart,
  ResolveEnd,
  ResolveStart,
  Router,
  RoutesRecognized,
} from '@angular/router';
import { JwtTokenService } from '../../../../shared/services/jwt-token.service';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  validRoles: any;
  private userRoles;
  private privileges: string[];
  private url: string = '';
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private jwtTokenService: JwtTokenService
  ) {
    this.routerDataListener();
    this.userRoles = jwtTokenService.getRoles();
    this.privileges = this.userRoles['privilages'];
    console.log(this.userRoles);
  }

  private routeDataSubject = new BehaviorSubject<any>(null);
  public routeData = this.routeDataSubject.asObservable();

  sidebarData: ISidebar[] = [
    {
      displayName: 'inventory',
      route: 'inventory',
      active: true,
      display: false,
      children: undefined,
      isSelected: false,
      validRoles: ['inventory', 'pm', 'admin'],
    },
    {
      displayName: 'product-management',
      route: 'product-management',
      active: true,
      display: false,
      children: undefined,
      isSelected: false,
      validRoles: ['inventory', 'pm', 'admin'],
    },
    {
      displayName: 'user-management',
      route: 'user-management',
      active: true,
      display: false,
      children: undefined,
      isSelected: false,
      validRoles: ['admin', 'um'],
    },
    {
      displayName: 'sales',
      route: 'sales',
      active: true,
      display: false,
      isSelected: false,
      validRoles: ['admin', 'sales', 'pm'],
      children: [
        {
          displayName: 'adminastory',
          route: 'adminastory',
          active: true,
          display: false,
          children: undefined,
          isSelected: false,
          validRoles: ['admin','pm'],
        },
        {
          displayName: 'crud',
          route: 'crud',
          active: true,
          display: false,
          children: undefined,
          isSelected: false,
          validRoles: ['admin,sales'],
        },
      ],
    },
  ];

  getSideBarData() {
    this.defineActiveTabs();
    return this.sidebarData;
  }

  validateSideBar() {
    let userRoles: string = this.jwtTokenService.getRoles() as string;
    this.validRoles.includes(userRoles);
  }

  private routerDataListener() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((res) => {
        this.url = this.defineUrl(res.url);
        this.defineSelectedTab(this.url);
        const routeData = this.updateRouteData(this.route, this.url);
        this.routeDataSubject.next(routeData);
      });
  }

  private updateRouteData(route: ActivatedRoute, url: string): any {
    let currentRoute = route.firstChild;
    while (currentRoute?.firstChild) {
      currentRoute = currentRoute.firstChild;
    }

    let data: any = null;
    currentRoute?.data.subscribe((dataValue) => {
      data = { url: url, data: dataValue };
      this.routeDataSubject.next(data);
    });
    return data;
  }

  defineUrl(url: string) {
    return url.split('?')[0].split('/').pop() || '';
  }

  defineSelectedTab(url: string) {
    const updateSelection = (item: any) => {
      item.isSelected = item.route === url;
      if (item.children) {
        item.children.forEach((child) => {
          child.isSelected = child.route === url;
        });
      }
    };

    this.sidebarData.forEach((item) => {
      updateSelection(item);
    });
  }

  setPrivilages(validRoles, privileges) {
    const hasMatchingPrivilege = validRoles.some((privilege) => {
      const isMatch = privileges.includes(privilege);
      return isMatch;
    });

    return hasMatchingPrivilege;
  }

  defineActiveTabs() {
    this.sidebarData.forEach((sidebarItem) => {
      if (sidebarItem.children) {
        sidebarItem.children.forEach((childItem) => {
          if (!this.setPrivilages(childItem.validRoles, this.privileges))
            childItem.active = false;
        });
      } else {
        if (!this.setPrivilages(sidebarItem.validRoles, this.privileges))
          sidebarItem.active = false;
      }
    });
    // console.log(this.sidebarData);
  }
}
