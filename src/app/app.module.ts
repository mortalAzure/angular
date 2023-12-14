import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProductComponent } from './product/product.component';
import { SettingsComponent } from './settings/settings.component';
import { ProfileComponent } from './profile/profile.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatStepperModule} from '@angular/material/stepper';
import {MatSortModule} from '@angular/material/sort';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSelectModule} from '@angular/material/select';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatBadgeModule} from '@angular/material/badge';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatListModule } from '@angular/material/list';
import { TvappliancesComponent } from './tvappliances/tvappliances.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { BabykidsComponent } from './babykids/babykids.component';
import { HomefurnitureComponent } from './homefurniture/homefurniture.component';
import { OfferzoneComponent } from './offerzone/offerzone.component';
import {  CUSTOM_ELEMENTS_SCHEMA }  from '@angular/core';
import { ElectronicsComponent } from './electronics/electronics.component';
import { FavouritesComponent } from './favourites/favourites.component';
import {MatDialogModule} from '@angular/material/dialog';
import { NotifcationComponent } from './notifcation/notifcation.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminscreenComponent } from './adminscreen/adminscreen.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminprofileComponent } from './adminprofile/adminprofile.component';
import { AdhomeComponent } from './adhome/adhome.component';
import { AddElectronicsComponent } from './add-electronics/add-electronics.component';
import { AddmenComponent } from './addmen/addmen.component';
import { AddwomenComponent } from './addwomen/addwomen.component';
import { AddfurnitureComponent } from './addfurniture/addfurniture.component';
import { AddbabyComponent } from './addbaby/addbaby.component';
import { AddappliancesComponent } from './addappliances/addappliances.component';
import {   HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { PricedetailsComponent } from './pricedetails/pricedetails.component';
import { WishlistitemsComponent } from './wishlistitems/wishlistitems.component';
import { SearchPipe } from './search.pipe';
import { AddressComponent } from './address/address.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ButtonsComponent } from './buttons/buttons.component';
import { MasterkeyComponent } from './masterkey/masterkey.component';
import {MatRadioModule} from '@angular/material/radio';
import { OverlayModule } from '@angular/cdk/overlay'
import { CdkMenuModule } from '@angular/cdk/menu';
import { CustomsidenavComponent } from './customsidenav/customsidenav.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ProductComponent,
    SettingsComponent,
    ProfileComponent,
    CartComponent,
    ProductDetailsComponent,
    TvappliancesComponent,
    MenComponent,
    WomenComponent,
    BabykidsComponent,
    HomefurnitureComponent,
    OfferzoneComponent,
    ElectronicsComponent,
    FavouritesComponent,
    NotifcationComponent,
    AdminloginComponent,
    AdminscreenComponent,
    AdmindashboardComponent,
    AdminprofileComponent,
    AdhomeComponent,
    AddElectronicsComponent,
    AddmenComponent,
    AddwomenComponent,
    AddfurnitureComponent,
    AddbabyComponent,
    AddappliancesComponent,
    PricedetailsComponent,
    WishlistitemsComponent,
    SearchPipe,
    AddressComponent,
    ButtonsComponent,
    MasterkeyComponent,
    CustomsidenavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTabsModule,
    MatTableModule,
    MatSliderModule,
    MatSidenavModule,
    MatSelectModule,
    MatBottomSheetModule,
    MatBadgeModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatStepperModule,
    MatSortModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatListModule,
    MatDialogModule,
    MatExpansionModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    NgbModule,
    MatRadioModule,
    OverlayModule,
    CdkMenuModule,






  ],
  providers: [],
  bootstrap: [AppComponent],
 schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

