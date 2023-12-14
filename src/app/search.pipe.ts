import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

 
  transform(gadgets:any , searchText:any): any {
    if(!searchText){
    return gadgets
  }
  return gadgets.filter((gadgets:any)=>{
    return (gadgets.brand.toLowerCase().includes(searchText))
    ||(gadgets.brand.toLowerCase().includes(searchText))
  })
  }

}
