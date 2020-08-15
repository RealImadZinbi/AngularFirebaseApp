import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-menu-docteur',
  templateUrl: './menu-docteur.component.html',
  styleUrls: ['./menu-docteur.component.css']
})
export class MenuDocteurComponent implements OnInit {

  user$: Observable<firebase.User>;
  constructor(private afauth:AngularFireAuth,
             private router: Router) {
          this.user$=  afauth.authState;  
  }
  ngOnInit(): void {
  }
    logout() {
        this.afauth.auth.signOut();
        this.router.navigate(['/']);
      }
}
