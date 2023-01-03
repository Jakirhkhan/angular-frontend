import { CloseScrollStrategy } from '@angular/cdk/overlay';
import { StickyDirection } from '@angular/cdk/table';
import { HttpClient } from '@angular/common/http';
import { CompilerConfig } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { config } from 'src/app/config';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  //constructor() { }

  private url : string = config.apiUrl;
  private authUrl : string = config.authUrl;
  constructor(private http: HttpClient) {}

  getTaxPayers(path : string = ''): Observable<any[]>{
    return this.http.get<any[]>(this.url+path)
  }


  getTaxPayer(path : string = ''): Observable<any[]>{
    console.log("Api url:"+this.url+path);
    return this.http.get<any[]>(this.url+path)
  }

  signinTaxPayer(payload : Object): Observable<any>{
    console.log("Api url:"+this.authUrl);
    return this.http.post<any>(this.authUrl+'/signin',payload)
  }
  signupTaxPayer(payload : Object): Observable<any>{
    console.log("Api url:"+this.authUrl);
    return this.http.post<any>(this.authUrl+'/signup',payload)
  }
  
}
