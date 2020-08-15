import { RegisterModel } from './../models/register.model';
import { LoginModel } from './../models/login.model';
import { Router } from '@angular/router';
import { AuthenticationDoctorService } from './../authentication-doctor.service';
import { DoctorService } from './../doctor.service';
import { InteractionService } from './../interaction.service';
import { SpecialityService } from './../speciality.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {
  user: RegisterModel = new RegisterModel();

specialities$
  constructor(specialityService: SpecialityService,
    private interactionService: InteractionService,
    private doctorService: DoctorService,
    private authenticationDoctorService :AuthenticationDoctorService,
    private router: Router) {
      this.specialities$=specialityService.getSpeciality();

     }
     save(doctor) {
      this.doctorService.create(doctor);
      this.router.navigate(['/Doctors']);

 
    }
    sendUserId(user: LoginModel) {
     this.interactionService.sendUserId(user);
     }
     sendData(val: boolean) {
       this.interactionService.sendThing(val);
       console.log(val);
     }  
   
   ngOnInit(): void {
     
   }
   signUp() {
     this.authenticationDoctorService.SignUp(this.user.email,this.user.password);
     this.user.email = '';
     this.user.password = '';
     console.log(this.user);
     }
 

 

}
