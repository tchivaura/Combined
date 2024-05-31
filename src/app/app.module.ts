import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{Routes,RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from 'src/user/user-login/user-login.component';
import { UserRegisterComponent } from 'src/user/user-register/user-register.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {HttpClientModule} from '@angular/common/http'
import { HousingService } from './services/housing.service';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import { UserServiceService } from './services/user-service.service';
import { AlertifyService } from './services/alertify.service';
import { AuthService } from './services/auth.service';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

const appRoutes :Routes=[
  {path:'',component:PropertyListComponent},
  {path:'add-property',component:AddPropertyComponent},
  {path:'rent-property',component:AddPropertyComponent},
  {path:'property-detail/:id',component:PropertyDetailComponent},
  {path:'user/login',component:UserLoginComponent},
  {path:'user/register',component:UserRegisterComponent},
  {path:'**',component:PropertyListComponent}

]
@NgModule({
  declarations: [	
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
      NavBarComponent,
      AddPropertyComponent,
      PropertyDetailComponent,
      UserLoginComponent,
      UserRegisterComponent
      
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    TabsModule.forRoot(),
    ButtonsModule.forRoot(),
    BsDatepickerModule.forRoot()
    
  ],
  providers: [
    HousingService,
    UserServiceService,
    AlertifyService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
