import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { config } from 'src/app/config';
import { AuthService } from 'src/app/service/auth/auth.service';
import { HttpClientWithAuthorization } from 'src/app/service/auth/http-client-with-authorization';
import { StorageService } from 'src/app/service/auth/storage.service';
import { BackendService } from 'src/app/service/no-auth/backend.service';
import { TaxPayers } from './TaxPayers';

@Component({
  selector: 'app-taxpayers',
  templateUrl: './taxpayers.component.html',
  styleUrls: ['./taxpayers.component.css']
})
export class TaxpayersComponent implements OnInit{

  private url : string = config.apiUrl+'/taxpayers'
  taxPayers: TaxPayers[] = [];
  dataSource: TaxPayers[] = [];
  displayedColumns: string[] = ['id', 'name', 'tin', 'gender','zone','circle','action'];
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    //this.dataSource.paginator = this.paginator;
  }

  constructor(
    private taxPayersService:  BackendService,
    private authService: AuthService,
    private storageService: StorageService,
    private httpClientWithAuthorization:HttpClientWithAuthorization
    ){
      
    }

  ngOnInit(){

    this.httpClientWithAuthorization.get<any>(this.url)
    .subscribe(data=>{
      console.log(data);
      this.dataSource = data;
      
    });
  }
}