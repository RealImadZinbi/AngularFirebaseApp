import { InteractionService } from './../interaction.service';
import { Doc } from './../doc.model';
import { DoctorService } from './../doctor.service';
import { SpecialityService } from './../speciality.service';
import { Router } from '@angular/router';
import { doctorModel } from './../models/doctor.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit ,Input} from '@angular/core';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  doctor: Doc[];  
@Input('parentData') public doc;
  specialities$;
  docteur: Doc;
  constructor(private formBuilder:FormBuilder,
    private router :Router,
    specialityService: SpecialityService,
    private doctorService: DoctorService,
    private interactionService: InteractionService) {
      this.specialities$=specialityService.getSpeciality();
      this.interactionService.list$.subscribe(doctor => {
        this.docteur=doctor;
       })
   }
   save(doctor) {
     this.doctorService.create(doctor);
     this.router.navigate(['/Doctors']);

   }
   updateDoctor(docteur) {
     this.doctorService.updateDoctor(docteur);

   }
  
  ngOnInit(): void {
   
    this.doctorService.getDoctors().subscribe(data => {
      this.doctor = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Doc;
      })
    });
  }

}
