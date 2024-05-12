import { Component, OnInit } from '@angular/core';
import { FormsModule,NgForm } from '@angular/forms';
import { AlertifyService } from 'src/app/services/alertify.service';
import { Router } from '@angular/router';
import { RouterModule ,ActivatedRoute} from '@angular/router';


import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private authService : AuthService,private alertfy: AlertifyService,private router :Router) { }

  ngOnInit() {
  }


  onLogin(loginForm:NgForm){
    console.log(loginForm.value)
    const token=this.authService.authUser(loginForm.value)
    if(token){
      localStorage.setItem('token',token.userName);
      this.alertfy.success("Login scusssful");
      this.router.navigate(['/'])

    }
    else{
      this.alertfy.error("Login failed")
    }
    
  }
  

}
