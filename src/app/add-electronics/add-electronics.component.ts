import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-electronics',
  templateUrl: './add-electronics.component.html',
  styleUrls: ['./add-electronics.component.css']
})
export class AddElectronicsComponent {
constructor(public fb:FormBuilder,public http:HttpClient){}
add_electronics:FormGroup|any
ngOnInit():void{
this.add_electronics=this.fb.group({
  brand:new FormControl('',Validators.requiredTrue),
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
  this.http.post("http://localhost:3000/electronics",this.add_electronics.value).subscribe((res)=>{
  // console.log(res)
})
this.add_electronics.reset()
}
}
