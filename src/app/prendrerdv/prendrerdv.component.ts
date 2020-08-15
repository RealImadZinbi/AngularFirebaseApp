import { MatDialogRef } from '@angular/material/dialog';
import { AjoutaurdvService } from './../ajoutaurdv.service';
import { AuthentificationService } from './../services/authentification.service';
import { PatientserviceService } from './../patientservice.service';
import { Router } from '@angular/router';
import { patientModel } from './../models/patient.model';
import { Doc } from './../doc.model';
import { DoctorService } from './../doctor.service';
import { InteractionService } from './../interaction.service';
import { SpecialityService } from './../speciality.service';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prendrerdv',
  templateUrl: './prendrerdv.component.html',
  styleUrls: ['./prendrerdv.component.css']
})
export class PrendrerdvComponent implements OnInit {
  doctor: Doc[];  
patient : patientModel;
docteur : Doc;
specialities$;
a : any;
Creneaux = [
  {
    name: '08h-10h'
  },
  {
    name: '10h-12h'
  },
  {
    name: '14h-16h'
  },
  {
    name: '16h-18h'
  }
]



  constructor(private formBuilder: FormBuilder,
              private router : Router,
              private specialityService: SpecialityService,
              private interactionService: InteractionService,
              private patientserviceService: PatientserviceService,
              private auth: AuthentificationService,
              private ajt: AjoutaurdvService,
              private dialogRef : MatDialogRef) {
                this.auth.user$.subscribe(user => {
                  this.a = user.uid ;
             })
                this.specialities$=specialityService.getSpeciality();

                this.interactionService.list$.subscribe(doctor => {
                  
                    this.docteur=doctor;
                 })
              
            

               }
               

           

  ngOnInit(): void {
    
  }
  addToCard(doctor: Doc,patient: patientModel) {
    this.patientserviceService.create(this.a,patient,doctor);

   }
   close() {
    this.dialogRef.close();
    this.router.navigate(['/Mesrdv']);

}
   
}
