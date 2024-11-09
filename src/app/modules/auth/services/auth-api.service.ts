import { Injectable } from '@angular/core';
import { ILoginUserInfo } from '../models/general.models';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  constructor() { }
  login(body: ILoginUserInfo) {
    let majidToken: string = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzM4NCJ9.eyJpc3MiOiJvbmxpbmUgc2hvcCIsImlhdCI6MTcyNjU3MzUxMywiZXhwIjoxNzU4MTk5NTEzLCJhdWQiOiJ3d3cuZXhhbXBsZS5jb20iLCJzdWIiOiJqcm9ja2V0QGV4YW1wbGUuY29tIiwidXNlck5hbWUiOiLZhdis24zYryDYtNix2YHbjCIsInBob25lTnVtYmVyIjoiMDkxOTUzNjY0MzQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJyb2xlIjp7InVzZXJSb2xlIjoiYWRtaW4iLCJwcml2aWxhZ2VzIjpbInBtIiwiaW52ZW50b3J5Il19fQ.CWXMzs0broN5MiCOAySGgM_MuJsQGXsd1MhaTQT7jCooRdZAPBeK912Vs6a0LOyu';
    let pedramToken: string = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJvbmxpbmUgc2hvcCIsImlhdCI6MTcyNjU3MzUxMywiZXhwIjoxNzU4MTk5NTEzLCJhdWQiOiJ3d3cuZXhhbXBsZS5jb20iLCJzdWIiOiJqcm9ja2V0QGV4YW1wbGUuY29tIiwidXNlck5hbWUiOiLZvtiv2LHYp9mFINin2LPYr9uMIiwicGhvbmVOdW1iZXIiOiIwOTEyMTIzNDU2NyIsIkVtYWlsIjoianJvY2tldEBleGFtcGxlLmNvbSIsIlJvbGUiOiJhZG1pbiJ9.jMjxPEiHr9p7q7ecZagxltXim8HJHiBo9It3X61re5M';
    let response;
    if (body.nationalCode === '0480684162') {
      response = {
        status: 200,
        token:majidToken
      }
      return response
    } else if (body.nationalCode === '1234567890') {
      response = {
        status: 200,
        token:pedramToken
      }
      return response
    }
    else return response = {
      status: 400,
      message:'user not valid'
    }
  }
}
