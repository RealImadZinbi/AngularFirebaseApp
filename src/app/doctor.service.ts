import { AngularFirestore } from 'angularfire2/firestore';
import { Doc } from './doc.model';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  doctorDoc;

  constructor(private db: AngularFireDatabase,
    private firestore: AngularFirestore) {
   
   }
  
   create(doctor: Doc ){
    return this.firestore.collection('docteurs').add(doctor);
}
getDoctors() {
  return this.firestore.collection('docteurs').snapshotChanges();
} 
 updateDoctor(doctor: Doc) {
   this.doctorDoc=this.firestore.doc('docteurs/'+ doctor.id);
   this.doctorDoc.update(doctor);
 
 }
 deleteDoctor(doctor: Doc) {
   this.doctorDoc=this.firestore.doc('docteurs/'+doctor.id);
   this.doctorDoc.delete(doctor);
 }
 
}
