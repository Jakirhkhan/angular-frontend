import { CloseScrollStrategy } from '@angular/cdk/overlay';
import { StickyDirection } from '@angular/cdk/table';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { config } from 'src/app/config';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  //constructor() { }

  private url : string = config.apiUrl;
  constructor(private http: HttpClient) {}

  getTaxPayers(path : string = ''): Observable<any[]>{
    return this.http.get<any[]>(this.url+path)
  }


  getTaxPayer(path : string = ''): Observable<any[]>{
    console.log("Api url:"+this.url+path);
    return this.http.get<any[]>(this.url+path)
  }
  
}
