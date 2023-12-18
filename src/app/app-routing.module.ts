import { AddfurnitureComponent } from './addfurniture/addfurniture.component';
import { AddElectronicsComponent } from './add-electronics/add-electronics.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { TvappliancesComponent } from './tvappliances/tvappliances.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { BabykidsComponent } from './babykids/babykids.component';
import { HomefurnitureComponent } from './homefurniture/homefurniture.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { CartComponent } from './cart/cart.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminscreenComponent } from './adminscreen/adminscreen.component';
import { AdminprofileComponent } from './adminprofile/adminprofile.component';
import { AdhomeComponent } from './adhome/adhome.component';
import { AddappliancesComponent } from './addappliances/addappliances.component';
import { AddmenComponent } from './addmen/addmen.component';
import { AddwomenComponent } from './addwomen/addwomen.component';
import { AddbabyComponent } from './addbaby/addbaby.component';
import { ProductComponent } from './product/product.component';
import { GuardGuard } from './guard.guard';
import { MasterkeyComponent } from './masterkey/masterkey.component';
import { MasterGuard } from './master.guard';

const routes: Routes = [
  {
                            path:'log',
                            component:LoginComponent
                        },{
                            path:'signup',
                            component:SignupComponent
                        },{
                          path:'admin',
                          component:AdminloginComponent
                        }
                         ,{
                         path:'',pathMatch:'full',redirectTo:'/log'
                         }
                        ,{
                          path:'master',
                          component:MasterkeyComponent
                        },{
                          path:'addash',
                          component:AdmindashboardComponent,
                          canActivate:[MasterGuard],
                          children:[{
                            path:'adscreen',
                            component:AdminscreenComponent
                          },{
                            path:'adprofile',
                            component:AdminprofileComponent
                          },{
                            path:'adhome',
                            component:AdhomeComponent,
                            children:[ {
                              path:'addele',
                              component:AddElectronicsComponent
                            },{
                              path:'addapp',
                              component:AddappliancesComponent
                            } ,{
                              path:'addmen',
                              component:AddmenComponent
                            },{
                              path:'addwomen',
                              component:AddwomenComponent
                            },{
                              path:'addbaby',
                              component:AddbabyComponent
                            },{
                              path:'addfurn',
                              component:AddfurnitureComponent
                            }]
                          }]
                           },{
                            path:'dash',
                            component:DashboardComponent,
                            canActivate:[GuardGuard],
                            children:
                            [{
                              path:'fav',
                              component:FavouritesComponent
                            },{
                              path:'cart',
                              component:CartComponent
                            },{
                              path:"product/:id",
                              component:ProductComponent
                           },{
                             path:'home',
                            component:HomeComponent
                           },{
                            path:'tv',
                            component:TvappliancesComponent
                          },{
                            path:'men',
                            component:MenComponent
                         },{
                            path:'women',
                            component:WomenComponent
                        },{
                            path:'baby',
                            component:BabykidsComponent
                        },{
                            path:'furniture',
                            component:HomefurnitureComponent
                        } ,{
                            path:'eletr',
                            component:ElectronicsComponent
                      }]
                      }
                      ];

@NgModule({
  imports: [RouterModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
