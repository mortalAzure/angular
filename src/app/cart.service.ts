import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(public toastr:ToastrService){}
  cartbooks:any[]=[]
  cartsubject = new Subject()
  
  AddToCart(books:any){
    let currentbook = {...books,count:1}
    this.cartbooks.push(currentbook)
    this.cartsubject.next(this.cartbooks)
  }
  getAllbooks(){
  return this.cartbooks
  }
  getPriceDetailsInCartItem(book:any){
  let pricedetails={
    discountedPrice:(book.Mrp*book.count)-(book.Discount)/100*(book.Mrp*book.count),
    Mrp:book.Mrp*book.count
  }
  return pricedetails
  }

  incprodCount(book:any){
    let index= this.cartbooks.findIndex((item)=>{
      return item.id===book.id
    })
    this.cartbooks[index].count++;
    this.getPriceDetailsInCartItem(book)
    this.cartsubject.next (this.cartbooks)
  }
  decprodCount(book:any){
    let index= this.cartbooks.findIndex((item)=>{
      return item.id===book.id
    })
    this.cartbooks[index].count--;
    this.getPriceDetailsInCartItem(book)
    this.cartsubject.next (this.cartbooks)
  }
removeitemcount(book:any){
  let  removeconfirm  = window.confirm ("are you sure..?")
  if(removeconfirm){
    let index = this.cartbooks.findIndex((item)=>
    {
      return item.id===book.id;
    })
    this.cartbooks.splice(index,1)
    this.cartsubject.next(this.cartbooks)
  }


}
getBilling(cartItems:any){
  let billingDetails={
    Mrp:0,
    Discount:0,
    delivery:0
  }
  cartItems.forEach((item:any)=>{
    billingDetails.Mrp=billingDetails.Mrp+(item.Mrp*item.count)
    billingDetails.Discount=billingDetails.Discount+((item.Discount/100*item.Mrp)*item.count);
    billingDetails.Mrp>=1500?billingDetails.delivery=0:billingDetails.delivery=50;
  })
  return billingDetails;
}
isproductincart(veg:any){
  let book = this.cartbooks.find((p:any)=>{
    return p.id===p.id
  })
  if(book){
    return true;
  }else{
    return false;
  }
}
getdiscountedprice(currentitem:any){
  return currentitem.Mrp-(currentitem.discount)/100*currentitem.Mrp
}

}
