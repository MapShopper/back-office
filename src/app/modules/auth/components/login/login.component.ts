import { LocalStorageService } from '../../../../shared/services/local-storage.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SubSink } from 'subsink';
import { AuthApiService } from '../../services/auth-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  constructor(
    private authApiService: AuthApiService,
    private localStorageService: LocalStorageService,
    private router:Router
  ){}
  public loginForm: FormGroup;
  private subSink = new SubSink();
  ngOnInit(): void {
      this.initForm()
  }
  initForm() {
    this.loginForm = new FormGroup({
      nationalCode: new FormControl(null,Validators.required),
      password: new FormControl(null,Validators.required)
    })
  }
  login() {
    if (this.loginForm.valid) {
      
      let body = this.loginForm.value
      let res = this.authApiService.login(body);
      console.log(res);
      if (res['status'] === 200) {
        this.localStorageService.set('token', res['token'])
        this.router.navigate(['/landing'])
      } else {
        alert(res['message'])
      }
    } else {
      alert('please fill the form')
    }
      
  }
}
