import { Component, Input, computed, signal } from '@angular/core';
import { navBarData } from './nav';

@Component({
  selector: 'app-adminnav',
  standalone: true,
  imports: [],
  templateUrl: './adminnav.component.html',
  styleUrl: './adminnav.component.css'
})
export class AdminnavComponent {
  navdata=navBarData;
  
  @Input() set collapsed(val:boolean){
    this.sideNaveCollapsed.set(val)
  }
  sideNaveCollapsed=signal(false);
  profilePicSize= computed(()=>this.sideNaveCollapsed()?'32':'100')
  iconsize= computed(()=>this.sideNaveCollapsed()?'22':'80')
  iconpadding=computed(()=>this.sideNaveCollapsed()?'12':'20')
}
