import { UserModel } from './../models/user.model';
import { AngularFirestore } from 'angularfire2/firestore';
import { switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { UserService } from './../user.service';
import { RegisterModel } from './../models/register.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthentificationService } from '../services/authentification.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user: RegisterModel = new RegisterModel();
  registerForm: FormGroup;
  hide = true;
  user$: Observable<any>
  constructor(private formBuilder: FormBuilder,
    private afauth: AngularFireAuth,
    private authenticationService:AuthentificationService,
    private userService: UserService,
    private afs: AngularFirestore,
    router: Router) {
     
     }
 
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      'name': [this.user.name,[Validators.required]],
      'email': [this.user.email,[Validators.required,Validators.email]],
      'password': [this.user.password,[Validators.required,Validators.minLength(6),Validators.maxLength(30)]]
    });
  }
  onRegisterSubmit() {
    alert(this.user.name +' '+ this.user.email+ ' '+ this.user.password); //Alert message with name and email and password (c'est une notification)
  }
  signUp() {
    this.authenticationService.SignUp(this.user.email,this.user.password);
    this.user.email = '';
    this.user.password = '';
    }
}


