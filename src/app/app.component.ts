import { JwtTokenService } from './shared/services/jwt-token.service';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  constructor(private jwtTokenService: JwtTokenService){}
  title = 'back-office';
  ngOnInit(): void {
      
  }
}
