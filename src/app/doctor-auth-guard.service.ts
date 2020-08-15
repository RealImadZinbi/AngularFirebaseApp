import { Router } from '@angular/router';
import { AngularFirestoreDocument, AngularFirestore } from 'angularfire2/firestore';
import { UserModel } from './models/user.model';
import { AuthentificationService } from './services/authentification.service';
import { UserService } from './user.service';
import { switchMap, map, take } from 'rxjs/operators';
import { Injectable, CanActivate } from '@angular/core';
import { AuthGuardService } from './services/auth-guard.service';
import { Observable} from 'rxjs'
import 'rxjs/add/operator/map'
import { AngularFireAuth } from 'angularfire2/auth';
@Injectable({
  providedIn: 'root'
})
export class DoctorAuthGuardService implements CanActivate {
user$ : Observable<any>
userDoc: AngularFirestoreDocument<UserModel>;
user: Observable<UserModel>;


  constructor(private auth: AuthentificationService,
    private userService: UserService,
    private afs:AngularFirestore,
    private afauth: AngularFireAuth,
    private router:Router) { }

    canActivate() {
      return this.auth.getUser().pipe(
        map(user => {
          if (!user || !user.isDoctor) {
            // noinspection JSIgnoredPromiseFromCall
            this.router.navigate(['/SignUp']);
            return false;
          }
          console.log(user.Doctor)

          return true;
        }),
        take(1),
      );
    }
}
