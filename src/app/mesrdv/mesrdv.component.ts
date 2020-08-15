import { switchMap } from 'rxjs/operators';
import { AngularFirestore } from 'angularfire2/firestore';
import { LoginModel } from './../models/login.model';
import { UserModel } from './../models/user.model';
import { InteractionService } from './../interaction.service';
import { rdvModel } from './../models/rdv.model';
import { AuthentificationService } from './../services/authentification.service';
import { AjoutaurdvService } from './../ajoutaurdv.service';
import { MesrdvService } from './../mesrdv.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs-compat/add/operator/map';
import {Observable} from 'rxjs'
import { from } from 'rxjs';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-mesrdv',
  templateUrl: './mesrdv.component.html',
  styleUrls: ['./mesrdv.component.css']
})

export class MesrdvComponent implements OnInit {
  item$
  a: any
  rdv: rdvModel[];
  user: LoginModel
  rdvDoc;
  constructor(private mesrdvService: MesrdvService,
              private auth: AuthentificationService,
              private ajt: AjoutaurdvService,
              private intercationService: InteractionService,
              private afs: AngularFirestore) { 
               
             }
              

   ngOnInit(): void {
    this.auth.user$.subscribe(user => {
      this.a = user.uid ;
      this.mesrdvService.getRendezvous(this.a).then(val => {
        val.subscribe(data => {
          this.rdv = data.map(e => {
            return {  
              id: e.payload.doc.id,
              ...e.payload.doc.data()
            } as rdvModel;
          })
        })
      })
 })
  
}
CancelRdv(rdv: rdvModel) {
  this.rdvDoc=this.afs.doc('patientsrdv/'+rdv.id);
  this.rdvDoc.delete(rdv);
}
  

}
