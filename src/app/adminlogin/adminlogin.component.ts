import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
 
admin:FormGroup|any
constructor(public fb:FormBuilder,
  public http:HttpClient,
  public route:Router,
  public toastr:ToastrService,
  public ls:LoginService){
  window.localStorage.clear()
  }
  MasterForm:any
  ngOnInit(): void {
   this.MasterForm=this.fb.group({
      // username:new FormControl(1),
      MasterKey:new FormControl('',Validators.required)
    })
  }
   master:any={}
submit(){
  this.ls.getMasterpassword(1).subscribe((res)=>{
this.master=res
if(this.master.password===this.MasterForm.value.MasterKey){
  window.localStorage.setItem('Industry',this.master.Industry)
  this.toastr.success('you enter correct password','horray')
  this.route.navigate(['/addash/adhome'])
}else{
  this.toastr.error('you enter incorrect password','Are you Admin'  )
}
  })
}

}
