import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackendService } from 'src/app/service/no-auth/backend.service';
import { TaxPayers } from '../TaxPayers';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  id: any = null;

  taxPayer : any = null;

  constructor(
    private route: ActivatedRoute,
    private taxPayersService:  BackendService
    ){}



  ngOnInit(){
    this.id = this.route.snapshot.paramMap.get('id');
    this.taxPayersService
    .getTaxPayer('/taxpayers/'+this.id)
    .subscribe(data => {
      this.taxPayer = data;
      console.log('data', this.taxPayer);
    });
  }
}
