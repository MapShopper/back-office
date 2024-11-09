import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }
  set(key,value) {
    localStorage.setItem(key,value)
  }
  remove(key) {
    localStorage.removeItem(key)
  }
  get(key) {
    return localStorage.getItem(key)
  }
  clear() {
    localStorage.clear()
  }
}
