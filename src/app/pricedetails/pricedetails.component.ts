import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-pricedetails',
  templateUrl: './pricedetails.component.html',
  styleUrls: ['./pricedetails.component.css']
})
export class PricedetailsComponent {
  CartItems:any[]=[]
  CartItemsPrice:any;
  CartItemsDiscount:any;
  DeliveryCharge:any; 
  
  constructor( private cs:CartService){}
  
  ngOnInit(): void {
    this.CartItems = this.cs.getAllbooks()
    this.getbillingDetails();
    this.cs.cartsubject.subscribe((items:any)=>{
    this.CartItems=items
    this.getbillingDetails()
    }) 
  }
  getbillingDetails(){
   let billingDetails = this.cs.getBilling(this.CartItems)
   this.CartItemsPrice= billingDetails.Mrp
   this.CartItemsDiscount=billingDetails.Discount
   this.DeliveryCharge=billingDetails.delivery
  
  
  
   console.log(this.getbillingDetails)
  }
}
