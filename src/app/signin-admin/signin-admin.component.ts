import { AuthentificationService } from './../services/authentification.service';
import { AuthenticationDoctorService } from './../authentication-doctor.service';
import { RouterModule } from '@angular/router';
import { InteractionService } from './../interaction.service';
import { AuthenticationAdminService } from './../authentication-admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin-admin',
  templateUrl: './signin-admin.component.html',
  styleUrls: ['./signin-admin.component.css']
})
export class SigninAdminComponent implements OnInit {
isAdmin
  constructor(private auth: AuthentificationService,
              private interactionService :InteractionService,
              private router: RouterModule) { }
sendThing() {
this.interactionService.sendThing(this.isAdmin);
console.log(this.isAdmin);
}
sendData(val: boolean) {
  this.interactionService.sendThing(val);
  console.log(val);
} 
  ngOnInit(): void {
  }

}
