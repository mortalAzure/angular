import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Input } from '@angular/core';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent {
  @Input() books:any;
  searchText:string='';
  isProdIncart: boolean=false;
  constructor(public http:HttpClient,
    public route:Router,
    public toastr:ToastrService,
    public ws:WishlistService,
    public cs:CartService){}
  gadgets:any
  id:any
  ngOnInit():void{
      this.http.get("http://localhost:3000/electronics").subscribe(
      (res)=>{console.log(res)
        this.gadgets=res
  })
  // this.id={'id':this.gadgets.id,
  //                   'productName':this.gadgets.productName,
  //                   'img':this.gadgets.productImg,
  //                   'description':this.gadgets.Descrption,
  //                   'ProductDetails':this.gadgets.ProductDetails,
  //                   'rating':this.gadgets.rating,
  //                   'Mrp':this.gadgets.Mrp,
  //                   'waranty':this.gadgets.waranty,
  //                   'discounts':this.gadgets.Discounts
  //        }
  }
  Addtocart(prod:any){
    this.cs.AddToCart(prod)
    this.isProdIncart=true
  }
  gotoCart(){
    this.route.navigate(['/dash/cart'])
  }
  addtofav(prod:any){
    this.ws.addwishlist(prod)
    
    
  }


}

