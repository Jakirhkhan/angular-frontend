import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { StorageService } from "./storage.service";

@Injectable({
    providedIn: 'root'
  })
  export class HttpClientWithAuthorization {
    bearerToken: any = "";
    constructor(
        private http: HttpClient,
        private storageService: StorageService
        
    ) {
        this.bearerToken= this.storageService.get('token');
    }
  
  createAuthorizationHeader(): HttpHeaders {
    const headerDict = {
      Authorization: 'Bearer ' + this.bearerToken,
    }
    console.log(headerDict);
    
    return new HttpHeaders(headerDict);
  }
  
  get<T>(url: string) {
    return this.http.get<T>(url, {
      headers: this.createAuthorizationHeader()
    });
  }
  
  post<T>(url:string, data: any) {
    this.createAuthorizationHeader();
    return this.http.post<T>(url, data, {
      headers: this.createAuthorizationHeader()
    });
  }
  }