import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { AppUser } from './models/AppUser';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFireDatabase,
              private firestore: AngularFirestore) { }
  
  save(user: firebase.User) {
    this.db.object('/users'+ user.uid).update({
      name: user.displayName,
      email: user.email
    });
  }
  get(uid: string) : FirebaseListObservable<AppUser> {
    return this.firestore.doc('users/'+ uid);
  }
}
