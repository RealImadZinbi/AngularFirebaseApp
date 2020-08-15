import { patientModel } from './models/patient.model';
import { AuthentificationService } from './services/authentification.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { LoginModel } from './models/login.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MesrdvDocService {
  a: any;
  user: LoginModel;
  docteurId
  patientDoc
    constructor(private afs: AngularFirestore,
      private auth: AuthentificationService) {
      
      }
  
      accepter(state :string,patient: patientModel) {
        this.patientDoc=this.afs.doc('patientsrdv/'+patient.id);
        this.patientDoc.update({
            etat: state
        });
       }
  
       getRendezvous(email : string) {
         const promis= new Promise<any>((resolve,reject)=>{
           let data;
            let item = this.afs.collection('patientsrdv', ref => ref.where('email','==',email)).snapshotChanges()
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
