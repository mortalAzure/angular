import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

 
cartItems:any[] =[]
constructor(public cs:CartService,public route:Router){}
ngOnInit(){
  this.cartItems=this.cs.getAllbooks()
  console.log(this.cartItems)
}
goingtoshopping(){
  this.route.navigate(['/dash/eletr'])
}

}
