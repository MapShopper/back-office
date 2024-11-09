import { Animations } from './../../../../shared/classes/animations/animations';
import { JwtTokenService } from '../../../../shared/services/jwt-token.service';
import { SidebarService } from './../../shared/services/sidebar.service';

import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  NavigationEnd,
  Router,
} from '@angular/router';
import { ISidebar } from '../../shared/models/sidebar.model';
import { filter } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  animations:[Animations.enterAnimation]
})
export class SidebarComponent implements OnInit {
  @Input('showSidebar') showSidebar: boolean = false;
  @Input('childInfo') childInfo: ISidebar[] | null | undefined;
  @Input('parentInfo') parentInfo: ISidebar[] | null;
  

  @Output('showSidebarEvent') showSidebarEvent: EventEmitter<boolean> =
    new EventEmitter<boolean>();
  routeData: any;
  constructor(
    private route: ActivatedRoute,
    private sidebarService: SidebarService,
    private router: Router,
    private jwtTokenService:JwtTokenService
  ) {}
  public sidebarList: ISidebar[];
  private validRoles: string[];

  ngOnInit(): void {
    // this.sidebarService.updateRouteData(this.route);
    // console.log(this.sidebarService.routerDataListener());
    if (this.childInfo?.length) {
      this.sidebarList = this.childInfo;
    } else {
      this.sidebarList = this.sidebarService.getSideBarData();

    }
    // this.updateRouteData(this.route);
    // console.log(this.sidebarService.routerDataListener());
    // this.sidebarService.routeData.subscribe((routeData) => {
    //   // console.log('object');
    //   this.routeData = routeData['data'];
    // });

  }
  validateSideBarItems() {
    let userRoles :string = this.jwtTokenService.getRoles() as string;
    this.validRoles.includes(userRoles)
  }

  changeSidebarMode() {
    this.showSidebar = !this.showSidebar;
    this.showSidebarEvent.emit(this.showSidebar);
  }
  logRoute(route: string) {
  }
}
