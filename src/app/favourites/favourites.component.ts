import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';
import { WishlistService } from '../wishlist.service';
@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent {
  wishlist:any=[]
  constructor(public cs:CartService ,public router:Router,public ws:WishlistService){}
  ngOnInit(){
    this.wishlist=this.ws.getAllbooks()
    console.log(this.wishlist)
  }
  goingtoshopping(){
    this.router.navigate(["/dash/eletr"])
  }
}
