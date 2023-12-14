import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminprofileComponent } from '../adminprofile/adminprofile.component';

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
}
