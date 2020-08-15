import { Injectable, CanActivate } from '@angular/core';
import { CanActivate } from '@angular/core';
import { AuthentificationService } from './authentification.service';
import { Router, RouterStateSnapshot } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthentificationService,private router: Router) { }

  canActivate(route, state: RouterStateSnapshot) {
     return  this.auth.user$.map(user => {
       if  (user) return true;  

       this.router.navigate(['/Signup'], {queryParams: { returnUrl: state.url }});
       return false;
      
     });

     
  }
 
}
  

