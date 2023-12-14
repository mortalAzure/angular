import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-masterkey',
  templateUrl: './masterkey.component.html',
  styleUrls: ['./masterkey.component.css']
})
export class MasterkeyComponent {
  constructor(public http:HttpClient,public route:Router,public fb:FormBuilder,public toastr:ToastrService){}
  adminRegister!: FormGroup; 
ngOnInit(){
this.adminRegister=this.fb.group({
  username:new FormControl('',Validators.required,[this.isUserUnique.bind(this)]),
  password:this.fb.control('',Validators.compose([Validators.required,Validators.pattern('^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$')])),
  email:this.fb.control('',Validators.compose([Validators.required,Validators.email]),[this.isemailUnique.bind(this)]),
  gender:this.fb.control('',Validators.required),
  role:this.fb.control('Admin'),
  isactive:this.fb.control(true),
})
}
log(){
   if(this.adminRegister.valid){
    this.http.post("http://localhost:3000/masterPassword",this.adminRegister.value).subscribe((res)=>{
      console.log(res)
      this.toastr.success('Admin Registered Succesfully')
      this.route.navigate(['/log'])

    })
   }else{
    this.toastr.error('please fill the all fields')
   }

}
isUserUnique(fc:any):Promise<any>{
  var p = new Promise((res,reject)=>{
    this.http.get(`http://localhost:3000/user?username=${fc.value}`).subscribe((data:any)=>{
      if(data['length']!==0){
        res({userExistError:'user already exist'})
      }
      else{
        res(null)
      }
    })
  })
  return p
}

isemailUnique(fc:any):Promise<any>{
  var p=new Promise((res )=>{
    this.http.get(`http://localhost:3000/user?username=${fc.value}`).subscribe((data:any)=>{
      if(data['length']!==0){
        res({emailExistError:'email already exist'})
      }else{
        res(null)
      }
    })
  })
  return p
}

}
