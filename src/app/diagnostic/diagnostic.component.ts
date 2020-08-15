import { InteractionService } from './../interaction.service';
import { MondiagnosticComponent } from './../mondiagnostic/mondiagnostic.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Component, OnInit, Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { HttpParams } from "@angular/common/http";
import { HttpResponse } from "@angular/common/http";

@Component({
  selector: 'app-diagnostic',
  templateUrl: './diagnostic.component.html',
  styleUrls: ['./diagnostic.component.css']
})
export class DiagnosticComponent implements OnInit {
  autoRenew = new FormControl();
  symptom: string;
  text;
  
    choice : string[] = [];  
    a: any
  symptomes  = [
    {
        name: 'pressure chest' , checked: false , count :1
    },
    {
        name: 'angina pectoris' , checked: false , count : 2
    },
    {
      name: 'nausea',checked: false , count : 3
  },
  {
    name: 'palpitation',checked:false ,  count : 4
  },
  {
  name: 'labored breathing',checked:false ,  count : 5
},
{
  name: 'vomiting' , checked: false, count : 6
},
{
  name: 'vertigo' , checked:false ,  count : 7
},

{
  name: 'mental status changes', checked:false , count: 8
},
{
  name: 'night sweat' , checked:false, count : 9
},
{
  name: 'unable to concentrate', checked:false, count : 10
},
{
  name: 'malaise' , checked:false, count : 10
},
{
  name:'difficulty', checked:false, count : 11
},
{
  name: 'malaise', checked: false, count : 12
},
{
  name: 'tachypnea',checked: false, count : 13
},
{
  name:'distress respiratory', checked:false, count : 14
},
{
  name: 'wheezing', checked:false, count : 15
},
{
  name: 'cough', checked: false, count : 16
},
{
  name:'dyspnea on exertion', checked:false, count : 17
},
{
  name:'rale', checked:false, count : 18
},
{
  name: 'numbness', checked: false, count : 19
},
{
  name: 'seizure', checked: false, count : 20
},
{
  name: 'unresponsiveness' , checked: false, count : 21
},
{
  name: 'hemiplegia', checked: false, count : 22
},
{
  name: 'distress respiratory', checked: false, count : 23
},
{
  name: 'symptom aggravating factors', checked: false, count : 24
},
{
  name: 'productive cough', checked: false, count : 25
},
{
  name: 'pleuritic pain', checked: false, count : 26
}


];
sendToserver() {
  for(let s of this.symptomes) {
    if(s.checked){
      console.log(s)
      this.choice.push(s.name)
      
    }
  }
    this.sendGETRequestWithParameters(this.choice[0],this.choice[1],this.choice[2],this.choice[3]).subscribe((res: Response)=>{
      this.text = "Il semble que vous souffrez de "+res.diagnostic+",nous vous invitons à prendre rendez-vous avec un "+res.specialite
      this.sendData(this.text)

    })
   

}
  constructor(private router: Router,
              private httpClient: HttpClient,
              private dialog : MatDialog,
              private interactionService :InteractionService) {


   }

   public sendGETRequestWithParameters(one: string,two: string,three : string, four:string): Observable<any>{   
    let params = new HttpParams().set('one',one).set('two',two).set('three',three).set('four',four)


    return this.httpClient.get<string>("api", {params : params});
   }
  ngOnInit(): void {  
    
  }
  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.hasBackdrop=true;
    dialogConfig.disableClose=false;

    this.dialog.open(MondiagnosticComponent, dialogConfig);
}
sendData(text: string) {
  this.interactionService.sendText(text);
}  
    
}
