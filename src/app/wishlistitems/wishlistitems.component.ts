import { Component, Input } from '@angular/core';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-wishlistitems',
  templateUrl: './wishlistitems.component.html',
  styleUrls: ['./wishlistitems.component.css']
})
export class WishlistitemsComponent {
  @Input() item:any;


}
