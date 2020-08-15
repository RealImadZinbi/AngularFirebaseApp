import { Doc } from './doc.model';
import { AngularFirestore } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AjoutaurdvService {

  constructor(private afs : AngularFirestore) { }

   create(uid :string,doctor: Doc) {
    return  this.afs.collection('rendezvous').add({
      
       nom: doctor.nom,
       Speciality: doctor.Speciality,
       Telephone: doctor.Telephone,
       Adresse: doctor.Adresse,
       Tarif: doctor.Tarif,
       UserdId: uid,
       Jour: doctor.Jour,
       Creneau: doctor.Creneau,
       email: doctor.email


    });
   }
}