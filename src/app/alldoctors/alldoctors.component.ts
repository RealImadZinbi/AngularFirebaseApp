import { Doc } from './../doc.model';
import { DoctorService } from './../doctor.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-alldoctors',
  templateUrl: './alldoctors.component.html',
  styleUrls: ['./alldoctors.component.css']
})
export class AlldoctorsComponent implements OnInit {
  alldoctor: Doc[] = [];
  speciality;
  filtredDoctors: Doc[] = [];
  const docteur;
  constructor(router: ActivatedRoute,
              private doctorService: DoctorService) 
              {
               this.docteur =  this.doctorService.getDoctors().subscribe(data => {
      this.alldoctor = data.map(e => {
        return {  
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Doc;
      })
      router.queryParamMap.subscribe(params => {
        this.speciality = params.get('speciality');
        console.log(this.speciality);
         this.filtredDoctors = (this.speciality) ?
         this.alldoctor.filter(d => d.Speciality === this.speciality) :
         this.alldoctor;
         console.log(this.filtredDoctors);
      })          
    }
    );
     
   }

  ngOnInit(): void {
    this.docteur;
  }

}
