import { SidebarService } from './shared/services/sidebar.service';
import { JwtTokenService } from '../../shared/services/jwt-token.service';
import { Component, inject, OnInit } from '@angular/core';
import { ISidebar } from './shared/models/sidebar.model';
import { Animations } from '../../shared/classes/animations/animations';
import { ActivatedRoute, RouterOutlet } from '@angular/router';

@Component({
  selector: 'landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
  animations:[Animations.slideFadeInOut]
})
export class LandingComponent implements OnInit {
public showSidebar: boolean = false;
  
  constructor(private jwtTokenService: JwtTokenService,
    private sidebarService: SidebarService,
    private route:ActivatedRoute
  ) { }

  public animationsData: string;
  
  ngOnInit(): void {
    this.route.data.subscribe((data) => {
    })
    this.sidebarService.routeData.subscribe(routeData => {
      this.animationsData = routeData['data']['animation']
    })

  }
}
