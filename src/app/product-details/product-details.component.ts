import { Component, Input } from '@angular/core';
import { CartService } from '../cart.service';
import { MatDialog } from '@angular/material/dialog';
import { AddressComponent } from '../address/address.component';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  @Input() item :any;
  discountedPrice:any;
  itemprice:any;
  constructor(public cs:CartService,public dialog:MatDialog){}
  ngOnInit():void{
    this.getpriceDetails(this.item)

  }
  getpriceDetails(item:any){
    this.discountedPrice= this.cs.getPriceDetailsInCartItem(item).discountedPrice
    this.itemprice = this.cs.getPriceDetailsInCartItem(item).Mrp;
  }
  DecItemCount(item:any){
    this.cs.decprodCount(item)
    this.getpriceDetails(item)


  }
  IncItemCount(item:any){
    this.cs.incprodCount(item)
    this.getpriceDetails(item)

  }
  removeitem(item:any){
    this.cs.removeitemcount(item)
    this.getpriceDetails(item)
  }
  open(){
    this.dialog.open(AddressComponent,{
      width:'50%',
      height:'55%'
      
    })
  }


}
