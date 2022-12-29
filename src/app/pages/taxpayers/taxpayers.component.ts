import { Component } from '@angular/core';
import { BackendService, TaxPayers } from 'src/app/service/no-auth/backend.service';

@Component({
  selector: 'app-taxpayers',
  templateUrl: './taxpayers.component.html',
  styleUrls: ['./taxpayers.component.css']
})
export class TaxpayersComponent {

  taxPayers: TaxPayers[] = [];
  labelPosition: string = "right";

  constructor(
    private taxPayersService:  BackendService
    ){}


  ngOnInit(){
    this.taxPayersService
      .getTaxPayers()
      .subscribe(data => {
        console.log('data', data);
        this.taxPayers = data;
      });
  }

}
