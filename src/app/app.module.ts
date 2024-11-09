import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LocalStorageService } from './shared/services/local-storage.service';
import { SessionStorageService } from './shared/services/session-storage.service';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [
    LocalStorageService,
    SessionStorageService,
    provideAnimations()
  //   {
  //   provide: HTTP_INTERCEPTORS,
  //   useClass: MainInterceptorService,
  //   multi: true
  // },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
