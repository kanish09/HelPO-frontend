import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Cookie} from 'ng2-cookies/ng2-cookies'
@Injectable({
  providedIn: 'root'
})
export class UserService {
  url='http://localhost:8080/user/'
  constructor(private http:HttpClient) { }
  login(data:any){
    return this.http.post(this.url+'login',data)
  }
  signup(data:any){
    return this.http.post(this.url+'signup',data)
  }
  loggedIn() {
    return !!Cookie.get('token');
  }
}
