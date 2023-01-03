import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  loggedInStatus = false;
  constructor(public authService: AuthService){}

  ngOnInit(){
    this.authService.isLoggedIn
    .subscribe(data => {
      if(data){
        this.loggedInStatus = true;
      }
    });
    
  }

}
