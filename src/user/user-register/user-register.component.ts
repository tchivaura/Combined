import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,ValidatorFn, FormBuilder  } from '@angular/forms';
import { UserServiceService } from 'src/app/services/user-service.service';
import { User } from 'src/app/model/user';
import { AlertifyService } from 'src/app/services/alertify.service';


@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  registrationForm :FormGroup | any;
  user:User | any
  userubmitted:boolean= true
  constructor(private fb: FormBuilder,private userService:UserServiceService, private alertfy :AlertifyService) { }

  ngOnInit() {
    // this.registrationForm = new FormGroup({
    //   userName: new FormControl('', Validators.required),
    //   email: new FormControl(null, [Validators.required, Validators.email]),
    //   password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
    //   confirmPassword: new FormControl('', Validators.required),
    //   mobile: new FormControl(null, [Validators.required, Validators.maxLength(10)]),
    // }); // Pass matchingPasswordsValidator without invoking it
    this.createRegistrationForm();
  }

 
  
  createRegistrationForm(){
    this.registrationForm= this.fb.group(
      {
        userName : [null, Validators.required],
        email:[null,Validators.required],
        password:[null,Validators.required],
        mobile:[null,Validators.required],
        confirmPassword:[null,Validators.required]


      }
    )
  }
  onSubmit(){
    console.log("tinash")
    // Assign form values to user object
//this.user = Object.assign({}, this.user, this.registrationForm.value);

// Store user object in local storage

this.userService.addUser(this.userData());
this.alertfy.success('congrats')

  }
  userData():User{
    const userName = this.UserName?.value;
    const email = this.email?.value;
    const password = this.password?.value;
    const mobile = this.mobile?.value;
    const confirmPassword = this.confirmPassword?.value; // Assuming this property is accessible

    return { userName, email, password, mobile, confirmPassword };

    // return this.user{
    //   UserName:this.UserName.value,
    //   email :this.email.value,
    //   password : this.password.value,
    //   confirmPassword :this.confirmPassword.value
    //     mobile : this.mobile.value


    
  }
  get UserName() : FormControl{
    return this.registrationForm.get('UserName') as FormControl
  }
  get email() : FormControl{
    return this.registrationForm.get('email') as FormControl
  }
  get password() : FormControl{
    return this.registrationForm.get('password') as FormControl
  }
  get confirmPassword() : FormControl{
    return this.registrationForm.get('confirmPassword') as FormControl
  }
  get mobile() : FormControl{
    return this.registrationForm.get('mobile') as FormControl
  }

  


}
