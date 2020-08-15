import { AuthentificationService } from './services/authentification.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pfa';
  constructor(private auth:AuthentificationService,router: Router) {
    auth.user$.subscribe(user => {
      if(user) {  
        let returnlUrl = localStorage.getItem('returnUrl');
        router.navigateByUrl(returnlUrl);
      }
    });
  }
}
