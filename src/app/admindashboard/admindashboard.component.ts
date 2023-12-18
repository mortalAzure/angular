import { MatDialog } from '@angular/material/dialog';
import { AdminprofileComponent } from '../adminprofile/adminprofile.component';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent {
constructor(public dialog:MatDialog){}
profile(){
  this.dialog.open(AdminprofileComponent,{
    width:'50%',
    height:'50%'
  })
}

collapsed=signal(false);
sidenavWidth=computed(()=>this.collapsed()?'65px':'250px')
}
