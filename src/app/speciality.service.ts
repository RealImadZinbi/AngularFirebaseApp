import { AngularFireDatabase,FirebaseListObservable  } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpecialityService {

  constructor(private db: AngularFireDatabase) {
   
   }
   getSpeciality():FirebaseListObservable<any[]> {
    return this.db.list('/speciality').valueChanges();
  }
}
