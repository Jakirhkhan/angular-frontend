import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-login-signup-menu',
  templateUrl: './login-signup-menu.component.html',
  styleUrls: ['./login-signup-menu.component.css']
})
export class LoginSignupMenuComponent {
  constructor(public authService: AuthService){}

  //isLoggedin: Observable<boolean> = this.authService.isLoggedIn;

  ngOnInit(){
    
    
  }
  
  
}
