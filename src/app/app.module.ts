import { SignopComponent } from './signop/signop.component';
import { DoctorAuthGuardService } from './doctor-auth-guard.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { DoctorService } from './doctor.service';
import { SpecialityService } from './speciality.service';
import { UserService } from './user.service';
import { AuthGuardService as AuthGuard } from './services/auth-guard.service';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatMenuModule } from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavbarComponent } from './navbar/navbar.component';
import {MatButtonModule} from '@angular/material/button';
import { Validators, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { RegistrationComponent } from './registration/registration.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ChatComponent } from './chat/chat.component';
import { RdvComponent } from './rdv/rdv.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { DiagnosticComponent } from './diagnostic/diagnostic.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import { CheckrdvComponent } from './checkrdv/checkrdv.component';
import { HttpClientModule } from '@angular/common/http';
import { PostcomponentComponent } from './postcomponent/postcomponent.component';
import { PersonComponent } from './person/person.component';
import { EssaieComponent } from './essaie/essaie.component';
import { DocteurComponent } from './docteur/docteur.component';
import { FormsModule} from '@angular/forms';
import { DoctorsComponent } from './doctors/doctors.component'
import {MatDialogModule} from '@angular/material/dialog';
import { UpdateComponent } from './update/update.component';
import { AlldoctorsComponent } from './alldoctors/alldoctors.component';
import { AlldoctorsFilterComponent } from './alldoctors/alldoctors-filter/alldoctors-filter.component';
import { AlldoctorsCardComponent } from './alldoctors-card/alldoctors-card.component';
import { RdvCardService } from './rdv-card.service';
import { PrendrerdvComponent } from './prendrerdv/prendrerdv.component';
import { MesrdvComponent } from './mesrdv/mesrdv.component';
import { RdvaffecteComponent } from './rdvaffecte/rdvaffecte.component';
import { MespatientsComponent } from './mespatients/mespatients.component';
import { MenuDocteurComponent } from './menu-docteur/menu-docteur.component';
import { PersistenceModule } from 'angular-persistence';
import { MondiagnosticComponent } from './mondiagnostic/mondiagnostic.component';
import { SigninAdminComponent } from './signin-admin/signin-admin.component';
import { HomeComponent } from './home/home.component';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignupComponent,
    RegistrationComponent,
    AboutusComponent,
    ChatComponent,
    RdvComponent,
    DiagnosticComponent,
    CheckrdvComponent,
    PostcomponentComponent,
    PersonComponent,
    EssaieComponent,
    DocteurComponent,
    DoctorsComponent,
    UpdateComponent,
    AlldoctorsComponent,
    AlldoctorsFilterComponent,
    AlldoctorsCardComponent,
    PrendrerdvComponent,
    MesrdvComponent,
    RdvaffecteComponent,
    MespatientsComponent,
    MenuDocteurComponent,
    SignopComponent,
    MondiagnosticComponent,
    SigninAdminComponent,
    HomeComponent,
    AddDoctorComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatDatepickerModule, 
    MatCardModule,
    MatInputModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatSelectModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    PersistenceModule
    


  ],
  providers: [
    AuthGuard,
    UserService,
    SpecialityService,
    DoctorService,
    AngularFirestore,
    RdvCardService,
    DoctorAuthGuardService
  ],
  bootstrap: [AppComponent]
  

})
export class AppModule { }  
