import { AjoutaurdvService } from './../ajoutaurdv.service';
import { AuthentificationService } from './../services/authentification.service';
import { LoginModel } from './../models/login.model';
import { PrendrerdvComponent } from './../prendrerdv/prendrerdv.component';
import { InteractionService } from './../interaction.service';
import { MatDialog , MatDialogConfig } from '@angular/material/dialog';
import { Doc } from './../doc.model';
import { Component, OnInit, Input } from '@angular/core';
import { RdvCardService } from '../rdv-card.service';
@Component({

  selector: 'alldoctors-card',
  templateUrl: './alldoctors-card.component.html',
  styleUrls: ['./alldoctors-card.component.css']
})
export class AlldoctorsCardComponent implements OnInit {
  @Input('doctor') doctor: Doc;
  user : LoginModel;
  a: string
  constructor(private CardService: RdvCardService,
              private dialog: MatDialog,
              private intercationService: InteractionService,
              private auth: AuthentificationService) {
              
                
               }

  ngOnInit(): void {
  }
  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.hasBackdrop=true;
    dialogConfig.disableClose=false;

    this.dialog.open(PrendrerdvComponent, dialogConfig);
}
 sendUserId(uid: string) {
   this.intercationService
 }
 sendData(doctor: Doc) {
   this.intercationService.sendMessage(doctor);
 }  


   
}
