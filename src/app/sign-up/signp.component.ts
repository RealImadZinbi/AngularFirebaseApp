import { Router } from '@angular/router';
import { AuthenticationDoctorService } from './../authentication-doctor.service';
import { InteractionService } from '../interaction.service';
import { LoginModel } from '../models/login.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthentificationService } from '../services/authentification.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

   
  constructor( private auth:AuthenticationDoctorService,
    private interactionService: InteractionService,
    private router:Router) { 

}

sendUserId(user: LoginModel) {
this.interactionService.sendUserId(user);
}sendData(val: boolean) {
  this.interactionService.sendThing(val);
  console.log(val);
}  
navigate() {
  this.router.navigate(['/Mespatients']);

}
ngOnInit() {

}



}