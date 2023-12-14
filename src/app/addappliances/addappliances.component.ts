import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addappliances',
  templateUrl: './addappliances.component.html',
  styleUrls: ['./addappliances.component.css']
})
export class AddappliancesComponent {
  [x: string]: any;
  constructor(public fb:FormBuilder,public http:HttpClient){}
  Appliances:FormGroup|any
  ngOnInit():void{
  this.Appliances=this.fb.group({
    id:new FormControl('',Validators.requiredTrue),
    productName:new FormControl('',Validators.requiredTrue),
    brand:new FormControl('',Validators.required),
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
  this.http.post(" http://localhost:3000/Appliances",this.Appliances.value).subscribe((res)=>{
  // console.log(res)
})
this.Appliances.reset()
}

}
