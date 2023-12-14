import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-addfurniture',
  templateUrl: './addfurniture.component.html',
  styleUrls: ['./addfurniture.component.css']
})
export class AddfurnitureComponent {
  constructor(public fb:FormBuilder,public http:HttpClient){}
  furniture:FormGroup|any
  ngOnInit():void{
  this.furniture=this.fb.group({
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
    this.http.post(" http://localhost:3000/furniture",this.furniture.value).subscribe((res)=>[
      console.log(res)
    ])
    this.furniture.reset()
  }
}
