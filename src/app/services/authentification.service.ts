import { async } from '@angular/core/testing';
import { auth } from 'firebase/app';
import { UserModel } from './../models/user.model';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable , of, from, NEVER } from 'rxjs';
import 'rxjs/add/operator/map';
import { switchMap, mergeMap } from 'rxjs/operators';
@Injectable({

  providedIn: 'root'
})
export class AuthentificationService {
  user$: Observable<any>;

  constructor(private afauth: AngularFireAuth,
              private afs: AngularFirestore,
              private router: Router,
              ) { 
        this.user$ = this.afauth.authState.pipe(
          switchMap(user => {
            if(user) {
              return this.afs.doc<UserModel>(`users/${user.uid}`).valueChanges();
            } else {
              return of(null);
            }
          })
        )
        
  }
  async googleSigin() {
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.afauth.auth.signInWithPopup(provider);
    return this.updateUserData(credential.user);
  }
  async signOut() {
    await this.afauth.auth.signOut();
    return this.router.navigate(['/']);

  };
  private updateUserData(user) {
    const UserRef: AngularFirestoreDocument<UserModel> = this.afs.doc(`users/${user.uid}`);
    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    };

    return UserRef.set(data , {merge : true});

  }
  // Sign up with email/password
  async SignUp(email, password) {
    const credential = await   this.afauth.auth.createUserWithEmailAndPassword(email, password)
      
      console.log(credential.user);
    return this.updateUserData(credential.user);
  }

 async SignIn(email, password) {
    const credential = await this.afauth.auth.signInWithEmailAndPassword(email, password)
    console.log(credential.user);
    return this.updateUserData(credential.user);
  }
  getUser(): Observable<any> {
    return this.afauth.authState.pipe(
      mergeMap(authState => {
        if (authState) {
          return from(this.afs.doc(`users/${authState.uid}`).get());
        } else {
          return NEVER;
        }
      })
    );
  }
 
} 