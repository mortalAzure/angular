import { NotifcationComponent } from './../notifcation/notifcation.component';
import { MatDialog } from '@angular/material/dialog';
import { ProfileComponent } from '../profile/profile.component';
import { Component, computed, signal } from '@angular/core';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(public dialog:MatDialog){}
  showFiller = false;
  open(){
    this.dialog.open(NotifcationComponent,{
      width:'30%',
      height:'55%'
    })
  }
    Profile(){
      this.dialog.open(ProfileComponent,{
        width:'30%',
        height:'55%'
        
    })
  }

  
//  toggleCollapse(){
//   this.collapsed=!this.collapsed;
//  }
//  closeSidenav(){
//   this.collapsed=false
//  }
  collapsed=signal(false);
  sidenavWidth=computed(()=>this.collapsed()?'65px':'250px')
}