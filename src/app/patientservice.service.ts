import { Doc } from './doc.model';
import { patientModel } from './models/patient.model';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatientserviceService {

  constructor(private db: AngularFireDatabase,
              private firestore: AngularFirestore) { }
              create(uid: string,patient: patientModel,doctor : Doc){
                return this.firestore.collection('patientsrdv').add({
                  nom: patient.nom,
                  Telephone : patient.Telephone,
                  creneau : patient.creneau,
                  jour : patient.jour,
                  doctorId: doctor.id,
                  Tarif: doctor.Tarif,
                  email : doctor.email,
                  nomDocteur: doctor.nom,
                  Speciality: doctor.Speciality,
                  Adresse: doctor.Adresse,
                  UserdId: uid,
                  Jour: doctor.Jour

                });
            }
}
