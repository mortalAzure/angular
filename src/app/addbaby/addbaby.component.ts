import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-addbaby',
  templateUrl: './addbaby.component.html',
  styleUrls: ['./addbaby.component.css']
})
export class AddbabyComponent {
  constructor(public fb:FormBuilder,public http:HttpClient){}
  baby:FormGroup|any
  ngOnInit():void{
  this.baby=this.fb.group({
    id:new FormControl('',Validators.requiredTrue),
    brand:new FormControl('',Validators.required),
    productName:new FormControl('',Validators.requiredTrue),
    productImg:new FormControl('',Validators.requiredTrue),
    Discount:new FormControl('',Validators.requiredTrue),
    Mrp:new FormControl('',Validators.requiredTrue),
    Description:new FormControl('',Validators.requiredTrue),
    rating:new FormControl('',Validators.requiredTrue),
    waranty:new FormControl('',Validators.requiredTrue),
    ProductDetails :new FormControl('',Validators.requiredTrue)
  })
  }
  post(){
    this.http.post("http://localhost:3000/baby",this.baby.value).subscribe((res)=>{
      console.log(res)
    })
    this.baby.reset()
  }
}
