import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { config } from 'src/app/config';
import { HttpClientWithAuthorization } from 'src/app/service/auth/http-client-with-authorization';
import { StorageService } from 'src/app/service/auth/storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  private url : string = config.apiUrl;
  id: any;
  taxPayer: any;

  //Button Property
  btnLabel : string = "Calculate Tax";
  btnColor : string = "primary";
  btnType : string = "submit";


  constructor(
    private storageService: StorageService,
    private httpClientWithAuthorization: HttpClientWithAuthorization,
    private route: ActivatedRoute,
  ){
    
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.httpClientWithAuthorization.get<any>(this.url+'/taxpayers/'+this.id)
    .subscribe(data=>{
      console.log(data);
      this.taxPayer = data;
      console.log(this.taxPayer?.name);
    });
  }
  
}
