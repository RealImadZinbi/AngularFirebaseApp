import { SpecialityService } from './../../speciality.service';
import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'alldoctors-filter',
  templateUrl: './alldoctors-filter.component.html',
  styleUrls: ['./alldoctors-filter.component.css']
})
export class AlldoctorsFilterComponent implements OnInit {
  specialities$;
  @Input('speciality') speciality;
  constructor(private specialityService: SpecialityService) {
    this.specialities$ = specialityService.getSpeciality();

   }   

  ngOnInit(): void {
  }

}
