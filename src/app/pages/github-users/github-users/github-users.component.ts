
import { Component, OnInit } from '@angular/core';
import { GithubUser, GithubUserService } from 'src/app/service/github/github-user.service';


@Component({
  selector: 'app-github-users',
  templateUrl: './github-users.component.html',
  styleUrls: ['./github-users.component.css']
})
export class GithubUsersComponent implements OnInit{

  gUsers: GithubUser[] = [];
  labelPosition: string = "right";

  constructor(
    private githubUserService:  GithubUserService
    ){}


  ngOnInit(){
    this.githubUserService
      .getGithubUsers()
      .subscribe(data => {
        console.log('data', data);
        this.gUsers = data;
      });
  }

}
