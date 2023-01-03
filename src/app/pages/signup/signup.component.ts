import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth/auth.service';
import { BackendService } from 'src/app/service/no-auth/backend.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent {


  buttonLabel: string = "Signup";
  buttonColor: string = "primary";
  buttonType: string = "submit";

  constructor(
    private signupService: BackendService,
    private authService: AuthService,
    private router: Router
  ){
  }

  signupForm = new FormGroup(
    {
      "firstName": new FormControl('', Validators.required),
      "lastName": new FormControl(''),
      "tin": new FormControl(''),
      "nid": new FormControl(''),
      "gender": new FormControl(''),
      "userStatus": new FormControl(''),
      "email": new FormControl(''),
      "zone": new FormControl(''),
      "circle": new FormControl(''),
      "username": new FormControl('', Validators.required),
      "password": new FormControl('', Validators.required),
    }
  );
  
  onSubmit(){
    // console.log(this.signupForm)
      console.log(this.signupForm.value)
    if(this.signupForm.valid){
      
     this.signupService
     .signupTaxPayer(this.signupForm.value)
     .subscribe(data => {
       
       console.log("data", data);
       

       //redirect to login
       this.router.navigate(["/signin"]);
     });
   }
 }
 register(){}

}
