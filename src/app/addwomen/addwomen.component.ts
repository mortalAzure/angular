import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-addwomen',
  templateUrl: './addwomen.component.html',
  styleUrls: ['./addwomen.component.css']
})
export class AddwomenComponent {
  constructor(public fb:FormBuilder,public http:HttpClient){}
  women:FormGroup|any
  ngOnInit():void{
  this.women=this.fb.group({
    id:new FormControl('',Validators.requiredTrue),
    productName:new FormControl('',Validators.requiredTrue),
    productImg:new FormControl('',Validators.requiredTrue),
    Discount:new FormControl('',Validators.requiredTrue),
    Mrp:new FormControl('',Validators.requiredTrue),
    Description:new FormControl('',Validators.requiredTrue),
    rating:new FormControl('',Validators.requiredTrue),
    waranty:new FormControl('',Validators.requiredTrue),
    ProductDetails :new FormControl('',Validators.requiredTrue),
    brand:new FormControl('',Validators.required)

  })

  }
  post(){
    this.http.post("http://localhost:3000/women",this.women.value).subscribe((res)=>{
      console.log(res)
    })
    this.women.reset()
  }
}
