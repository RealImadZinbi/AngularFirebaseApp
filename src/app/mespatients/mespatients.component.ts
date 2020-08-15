import { DoctorService } from './../doctor.service';
import { Doc } from './../doc.model';
import { AuthenticationDoctorService } from './../authentication-doctor.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { AjoutaurdvService } from './../ajoutaurdv.service';
import { AuthentificationService } from './../services/authentification.service';
import { LoginModel } from './../models/login.model';
import { patientModel } from './../models/patient.model';
import { MesrdvDocService } from './../mesrdv-doc.service';
import { Component, OnInit } from '@angular/core';
import { AuthenticationDoctorService } from '../authentication-doctor.service';

@Component({
  selector: 'app-mespatients',
  templateUrl: './mespatients.component.html',
  styleUrls: ['./mespatients.component.css']
})
export class MespatientsComponent implements OnInit {
item$
a: any
patient: patientModel
user: LoginModel
rdvPatient
docteur;
alldoctor
currentEmail
  constructor(private mesrdvDocService :MesrdvDocService,
              private auth: AuthentificationService,
              private ajt: AjoutaurdvService,
              private afs: AngularFirestore,
              private doctorService :DoctorService
    ) { }

    ngOnInit(): void {
      
      this.auth.user$.subscribe(doctor => {
        console.log(doctor.email)
        this.currentEmail = doctor.email;
        this.mesrdvDocService.getRendezvous((this.currentEmail)).then(val => {
          val.subscribe(data => {
            this.patient = data.map(e => {
              return {  
                id: e.payload.doc.id,
                ...e.payload.doc.data()
              } as patientModel;
            })
          })
        })
   })
      console.log(this.patient)

      
       
  }
  
  CancelRdv(patient: patientModel) {
    this.rdvPatient=this.afs.doc('patientsrdv/'+patient.id);
    this.rdvPatient.delete(patient);
  }
  decisionRdv(etat: string,patient: patientModel) {
    this.mesrdvDocService.accepter(etat,patient);
  }
}
