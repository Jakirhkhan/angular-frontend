import { Router } from '@angular/router';
import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, catchError, from, map, tap } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  [x: string]: any;

  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(
    private storageService: StorageService,
    private router: Router,
    ) { }

    get isLoggedIn(): Observable<boolean> {
      const token = this.storageService.get('token');
      if(token != undefined){
        this.loggedIn.next(true);
      }
      return this.loggedIn.asObservable();
    }
    login(){
      console.log(this.loggedIn.asObservable())
      this.loggedIn.next(true);
    }
    logout() {                           
      this.loggedIn.next(false);
      this.router.navigate(['/login']);
    }

}