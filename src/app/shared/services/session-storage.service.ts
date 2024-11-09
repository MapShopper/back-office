import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  constructor() { }
  set(key,value) {
    sessionStorage.setItem(key,value)
  }
  remove(key) {
    sessionStorage.removeItem(key)
  }
  get(key) {
    sessionStorage.getItem(key)
  }
  clear() {
    sessionStorage.clear()
  }
}
