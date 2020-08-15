import { LoginModel } from './models/login.model';
import { rdvModel } from './models/rdv.model';
import { Observable } from 'rxjs';
import { FirebaseListObservable } from 'angularfire2/database';
import { async } from '@angular/core/testing';
import { AuthentificationService } from './services/authentification.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';
import  { from} from 'rxjs'
@Injectable({
  providedIn: 'root'
})

export class MesrdvService {
a: any;
user: LoginModel;
  constructor(private afs: AngularFirestore,
    private auth: AuthentificationService) {
    
    }

    

     getRendezvous(uid: string) {
       const promis= new Promise<any>((resolve,reject)=>{
         let data;
          let item = this.afs.collection('patientsrdv', ref => ref.where('UserdId','==',uid)).snapshotChanges()
           item.subscribe(val => {
             console.log(val);
             data=val
            return val
           })
          console.log(item)
           resolve(item)
  
  
        })
          return promis
       }
     
    
   
  async getRdv() {
    let UserId = await this.getUserId();
    console.log(UserId);
    return this.afs.doc('/users/'+ UserId).snapshotChanges();
  }

 
  
}
