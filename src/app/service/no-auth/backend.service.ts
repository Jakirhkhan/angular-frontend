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

  getTaxPayers(): Observable<TaxPayers[]>{
    return this.http.get<TaxPayers[]>(this.url)
  }
}

export interface TaxPayers{
  id: string,
  tin: string,
  nid:string,
  zone:string
}