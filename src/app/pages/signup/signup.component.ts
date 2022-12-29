import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  fname = "";
  lname = "";
  address = "";
  email = "";
  dob = "";
  username = "";
  password = "";
  errorMsg = "";

  register() {
    if (this.username.trim().length === 0) {
      this.errorMsg = "Username is required";
    } else if (this.password.trim().length === 0) {
      this.errorMsg = "Password is required";
    } else {
      this.errorMsg = "";
      // let res = this.auth.login(this.username, this.password);
      // if (res === 200) {
      //   this.router.navigate(['home']);
      // }
      // if (res === 403) {
      //   this.errorMsg = "Invalid Credentials";
      // }
    }
  }
}
