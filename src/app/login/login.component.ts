import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(public fb:FormBuilder,public ls:LoginService,public toastr:ToastrService,public route:Router){}

  loginForm=this.fb.group({
    username:this.fb.control('',Validators.required),
    password:this.fb.control('',Validators.required)
  })

  userData:any=[]
 login(){
  if(this.loginForm.valid){
    this.ls.getByCode(this.loginForm.value.username).subscribe((res)=>{
      this.userData=res;
      console.log(res)
      if(this.userData.password===this.loginForm.value.password){
        sessionStorage.setItem('id',this.userData.id)
        sessionStorage.setItem('email',this.userData.email)
        sessionStorage.setItem('firstname',this.userData.firstname)
        sessionStorage.setItem('lastname',this.userData.lastname)
        sessionStorage.setItem('profile',this.userData.profile)
        sessionStorage.setItem('mobilenumber',this.userData.mobilenumber)
        this.route.navigate(['/dash/home'])
        this.toastr.success('login succesfully')
      }else{
        this.toastr.error('incorrect password')
      }
    })
  }else{
    this.toastr.warning('please enter valid Information')
  }
 }


}
