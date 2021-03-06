import { Router } from '@angular/router';
import { InteractionService } from './../interaction.service';
import { LoginModel } from './../models/login.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthentificationService } from '../services/authentification.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  
  constructor( private auth:AuthentificationService,
               private interactionService: InteractionService
               ) { 
    
  }
  
  sendUserId(user: LoginModel) {
    this.interactionService.sendUserId(user);
  }
  sendData(val: boolean) {
    this.interactionService.sendThing(val);
    console.log(val);
  } 
  ngOnInit() {
    
  }
  
     
    
}
