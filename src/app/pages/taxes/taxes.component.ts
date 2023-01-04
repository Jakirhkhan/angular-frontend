import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { config } from 'src/app/config';
import { HttpClientWithAuthorization } from 'src/app/service/auth/http-client-with-authorization';

@Component({
  selector: 'app-taxes',
  templateUrl: './taxes.component.html',
  styleUrls: ['./taxes.component.css']
})
export class TaxesComponent implements OnInit{
  
  private url : string = config.apiUrl;
  tin: any;
  taxPayer: [];
  incomeYear: ['2022-23']

  constructor(
    private route: ActivatedRoute,
    private httpClientWithAuthorization: HttpClientWithAuthorization,
    private router: Router
  ){
    this.tin = this.route.snapshot.paramMap.get('tin');
  }


  ngOnInit(): void {
    
    
  }

  buttonLabel: string = "Submit";
  buttonColor: string = "primary";
  buttonType: string = "submit";


  taxCalculationForm = new FormGroup(
    {
      "incomeYear": new FormControl('', Validators.required),
      "salary": new FormControl('', Validators.required),
      "tin": new FormControl(''),
      "gender": new FormControl(''),
    }
  );

  onSubmit(){
    console.log(this.taxCalculationForm.value)
    console.log("TIN:"+this.tin);
    

    this.httpClientWithAuthorization.get<any>(this.url+'/taxpayer-by-tin/'+this.tin)
    .subscribe(data=>{
      this.taxPayer = data;
      console.log("Tax----:", data);

      const resTin = data?.tin || null;
      const resGender = data?.gender || null;
      const taxpayerId = data?.id || null;

      this.taxCalculationForm.get('tin')?.setValue(resTin);
      this.taxCalculationForm.get('gender')?.setValue(resGender);

      this.httpClientWithAuthorization.post<any>(this.url+'/taxes',this.taxCalculationForm.value)
      .subscribe(data => {
        console.log("Save Data:",data);
        this.router.navigate(["/profile/"+taxpayerId]);
      });
    });
  }
}
