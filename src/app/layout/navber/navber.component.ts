import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/service/auth/auth.service';
import { StorageService } from 'src/app/service/auth/storage.service';

@Component({
  selector: 'app-navber',
  templateUrl: './navber.component.html',
  styleUrls: ['./navber.component.css']
})
export class NavberComponent {

  taxPayerId:any;
  isLoggedIn$: Observable<boolean>;
  constructor(
    public authService: AuthService,
    private storageService: StorageService,
    private router: Router
    ){
      this.isLoggedIn$ = authService.isLoggedIn;
      this.taxPayerId = this.storageService.get("taxpayer-id");
      console.log("taxPayerId:"+this.taxPayerId);
      
    }

  ngOnInit(){
        
  }

  signout(){
    console.log("LOGOUT");
    
    this.authService.logout();
    this.router.navigate(['/sign-in']);
    
    //redirect to login
    //this.router.navigate(["/signin"]);
  }

}
