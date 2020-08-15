import { LoginModel } from './../models/login.model';
import { InteractionService } from './../interaction.service';
import { AuthenticationDoctorService } from './../authentication-doctor.service';
import { RegisterModel } from './../models/register.model';
import { UserService } from './../user.service';
import { AuthentificationService } from './../services/authentification.service';
import { DoctorService } from './../doctor.service';
import { SpecialityService } from './../speciality.service';
import { Router } from '@angular/router';
import { doctorModel } from './../models/doctor.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-docteur',
  templateUrl: './docteur.component.html',
  styleUrls: ['./docteur.component.css']
})
export class DocteurComponent implements OnInit {
  
  user: RegisterModel = new RegisterModel();

  specialities$;
  constructor(private formBuilder:FormBuilder,
    private router :Router,
    specialityService: SpecialityService,
    private interactionService: InteractionService,
    private doctorService: DoctorService,
    private authenticationDoctorService :AuthenticationDoctorService,
    private userService: UserService)  {
      this.specialities$=specialityService.getSpeciality();
   }
   save(doctor) {
     this.doctorService.create(doctor);

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
