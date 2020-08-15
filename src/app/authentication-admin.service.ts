import { Router } from '@angular/router';
import { UserModel } from './models/user.model';
import { switchMap } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class AuthenticationAdminService {
  users$: Observable<any>;

  constructor(private afauth: AngularFireAuth,
              private afs: AngularFirestore,
              private router: Router) {
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
               async signOut() {
                await this.afauth.auth.signOut();
                return this.router.navigate(['/']);
            
              };
              async SignIn(email, password) {
                const credential = await this.afauth.auth.signInWithEmailAndPassword(email, password)
                console.log(credential.user);
            
                return this.updateUserData(credential.user);
            
              }
              private updateUserData(user) {
                const UserRef: AngularFirestoreDocument<UserModel> = this.afs.doc(`users/${user.uid}`);
                const data = {
                  uid: user.uid,
                  email: user.email,
                  displayName: user.displayName,
                  photoURL: user.photoURL,
                  isDoctor : true
                };
}
}
