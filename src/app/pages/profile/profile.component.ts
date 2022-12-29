import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  
  hide = true;

  label : string = "Submit";
  color : string = "primary";
  type : string = "submit";
  disabled: string = "disabled"

  profileForm = new FormGroup({
    name: new FormControl('',Validators.required),
    address : new FormControl('',Validators.required),
    username : new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(12)]),
    // username : new FormControl('', [Validators.required,Validators.minLength(6)]),
    password : new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(12)])
  });

  constructor(
    // private auth: AuthService,
    private router: Router
  ){
  }
  ngOnInit(): void {
    //this.buttonColor = "primary";
    //this.buttonLabel = "Login";
    //throw new Error('Method not implemented.');
  }

  onSubmit(){
    console.log("fasdfsadf");
    console.log(this.profileForm);
    console.log(this.profileForm.get('name'));
  }
  
}
