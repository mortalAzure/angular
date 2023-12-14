import { Component,Input } from '@angular/core';
import { CartService } from '../cart.service';
import { WishlistService } from '../wishlist.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {
  constructor(public cs:CartService,public ws:WishlistService,public route:Router){}
  @Input() item:any
  isProdIncart:boolean=false
  Addtocart(prod:any){
    this.cs.AddToCart(prod)
    this.isProdIncart=true
  }
  addtofav(prod:any){
    this.ws.addwishlist(prod)
  }
  gotoCart(){
    this.route.navigate(['/dash/cart'])
  }
}
