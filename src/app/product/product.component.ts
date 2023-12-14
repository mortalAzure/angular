import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  constructor(public ar:ActivatedRoute,public http:HttpClient){}
  product:any;
  ngOnInit(){
    this.ar.params.subscribe((res)=>{
      this.http.get(`http://localhost:3000/electronics/${res['id']}`).subscribe((product)=>{
        console.log(product)
        this.product=product
    })

    })
  }
  
}
