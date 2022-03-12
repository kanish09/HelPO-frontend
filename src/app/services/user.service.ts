import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
}
