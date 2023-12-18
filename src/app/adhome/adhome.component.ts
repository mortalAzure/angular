import { Component, Input } from '@angular/core';
import { navBarData } from './image';
 
@Component({
  selector: 'app-adhome',
  templateUrl: './adhome.component.html',
  styleUrls: ['./adhome.component.css']
})
export class AdhomeComponent {
SelectedIndex:number=0
images=navBarData;
indicator=true;
controls=true;

slideImage(index :number){
  this.SelectedIndex =  index
}
onPreviewClick(){
  if(this.SelectedIndex === 0){
    this.SelectedIndex=this.images.length-1
  }else{
    this.SelectedIndex--;
  }
}
onNextClick(){
  if(this.SelectedIndex === this.images.length - 1 ){
    this.SelectedIndex = 0;
  }else{
    this.SelectedIndex++;
  }
}
}
