import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';


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
  matcher = new LoginErrorStateMatcher();

  constructor(
    // private auth: AuthService,
    private router: Router
  ){
  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');

  }


  onSubmit(){

    console.log(this.loginForm);

    console.log('form values', this.loginForm.value);

  }

  login() {

    
  }
}
