import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  master="http://localhost:3000/masterPassword"

  constructor(public http:HttpClient) { }
  
  baseUrl:any='http://localhost:3000/user'


register(inputData:any){
return  this.http.post(this.baseUrl,inputData)
}

getByCode(code:any){
  return this.http.get(this.baseUrl+'/'+code)

}
isLoggedin(){
  return sessionStorage.getItem('username')!=null;
}
getuserRole(){
  return sessionStorage.getItem('email')!=null?sessionStorage.getItem('email')?.toString():'';
}

getItem(key:any){
  return sessionStorage.getItem(key)
}
getMasterpassword(code:any){
  return this.http.get(this.master+'/'+code)
}
isMaster(){
  return window.localStorage.getItem('Industry')!=null;
}
}
