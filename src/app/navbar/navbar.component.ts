import { InteractionService } from './../interaction.service';
import { Doc } from './../doc.model';
import { AuthenticationDoctorService } from './../authentication-doctor.service';
import { AuthentificationService } from './../services/authentification.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { Component, OnInit, OnDestroy } from '@angular/core';
import * as firebase from 'firebase';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnDestroy,OnInit {
  show: boolean = true;
private subscription: Subscription
  user$: Observable<firebase.User>;
  patient : boolean;
  docteur : boolean;
  isDoctor: string;
  role: any
  constructor(private afauth:AngularFireAuth,
             private router: Router,
             private auth: AuthenticationDoctorService,
             private interactionService :InteractionService) {
          this.user$=  afauth.authState; 

          this.interactionService.lis$.subscribe(val => {
                  this.isDoctor = val;
          localStorage.setItem('isDoctor',this.isDoctor);
            console.log(val);
         })
          this.isDoctor = localStorage.getItem('isDoctor');
        

  }
                  
 
    Logout() {
          this.afauth.auth.signOut();
          console.log(this.isDoctor);
          localStorage.clear();

        this.router.navigate(['/']);
      }
      logout() {
        this.afauth.auth.signOut();
        console.log(this.isDoctor);
        localStorage.clear();

        
      this.router.navigate(['/']);
    } 
      
      ngOnInit(): void {
        this.role=window.sessionStorage.getItem('role')

      }
      
}
