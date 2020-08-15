import { User } from 'firebase/app';
import { AuthenticationDoctorService } from './../authentication-doctor.service';
import { UserModel } from './../models/user.model';
import { switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { InteractionService } from './../interaction.service';
import { LoginModel } from './../models/login.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthentificationService } from '../services/authentification.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { of} from 'rxjs'
@Component({
  selector: 'app-signup-doctor',
  templateUrl: './signup-doctor.component.html',
  styleUrls: ['./signup-doctor.component.css']
})
export class SignupDoctorComponent implements OnInit {
isDoctor : boolean;
users$: Observable<any>
  constructor( private auth: AuthentificationService,
    private interactionService: InteractionService,
    private afauth: AngularFireAuth,
    private afs : AngularFirestore
   ) { 
    this.users$ = this.afauth.authState.pipe(
      switchMap(user => {
        if(user) {
          return this.afs.doc<UserModel>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    ) 
    this.users$ = this.afauth.authState.pipe(
      switchMap(user => {
        if(user) {
          return this.afs.doc<UserModel>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    ) 
    
}


sendThing() {
this.interactionService.sendThing(this.isDoctor);
console.log(this.isDoctor);
}
ngOnInit() {

}



}
