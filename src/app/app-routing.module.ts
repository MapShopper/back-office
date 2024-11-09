import { NgModule } from '@angular/core';
import { NoPreloading, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './shared/services/auth-guard.service';

const routes: Routes = [
  {
    path: '', redirectTo: 'auth', pathMatch: 'full'
  },
  {
    path : 'auth',loadChildren: () => import ('./modules/auth/auth.module').then(m => m.AuthModule), canActivate:[AuthGuardService] , data:{ guardFor : 'auth'} , title: 'welcome to our OnlineShop'
  },
  {
    path:'landing', loadChildren: () => import ('./modules/landing/landing.module').then(m => m.LandingModule) , canActivate:[AuthGuardService] ,data:{ guardFor : 'landing'} , title:'home page, make your accessories up to date and injoy it with our most compeleted online Shop'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy: NoPreloading})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
