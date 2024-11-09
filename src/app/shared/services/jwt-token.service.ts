import { Injectable } from '@angular/core';
import {jwtDecode} from 'jwt-decode';
import { IDecodedToken } from '../models/general.models';

@Injectable({
  providedIn: 'root'
})
export class JwtTokenService {

  constructor() { }
  jwtToken: string;
  decodedToken : IDecodedToken
  setToken(token) {
    this.jwtToken = token ? token : undefined;
    this.decodeToken()
  }
  decodeToken() {
    this.decodedToken = jwtDecode(this.jwtToken);
  }
  getRoles() {
    this.decodeToken();
    return this.decodedToken ? this.decodedToken['role'] : '';
  }
  getExpiryTime() {
    this.decodeToken();
    return this.decodedToken ? this.decodedToken['exp'] : null;
  }
  isTokenExpired(): boolean {
    let expiryTime = this.getExpiryTime();
    if (expiryTime) {
      return ((1000 * Number(expiryTime)) - (new Date()).getTime()) < 5000;
    } else {
      return false;
    }
  }
}
