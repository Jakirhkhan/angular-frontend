import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth/auth.service';
import { StorageService } from 'src/app/service/auth/storage.service';
import { BackendService } from 'src/app/service/no-auth/backend.service';


export class LoginErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent {
  // username = "";
  // password = "";
  errorMsg = "";


  btnLabel : string = "Sign In";
  btnColor : string = "primary";
  btnType : string = "submit";

  buttonLabel: string = "Allow me to Login";
  buttonColor: string = "primary";
  buttonType: string = "submit";

  loginForm = new FormGroup(
    {
      "username": new FormControl('', Validators.required),
      "password": new FormControl('', Validators.required),
    }
  );

  constructor(
    private router: Router,
    private loginService: BackendService,
    private authService: AuthService,
    private storageService: StorageService
  ){
  }

  onSubmit(){
     if(this.loginForm.valid){

      this.loginService
      .signinTaxPayer(this.loginForm.value)
      .subscribe(data => {
        const token = data?.token;
        const roles = data?.roles;
        const taxpayerid = data?.id;


        console.log("data", data?.id);
        this.storageService.set("token", token);

        this.storageService.set("roles", roles);
        this.storageService.set("taxpayer-id", taxpayerid);

        // redirect
        let isRoled: boolean = false;

        for (var role of roles) {
          if ( role === "ROLE_ADMIN"){
            isRoled = true;
            this.router.navigate(["/github-user"])
          }
        }
        if(!isRoled){
          this.router.navigate(["/taxpayers"]);
        }

      });
    }
  }

  login() {
  }
}
