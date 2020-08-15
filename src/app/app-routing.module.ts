import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { HomeComponent } from './home/home.component';
import { SigninAdminComponent } from './signin-admin/signin-admin.component';
import { SignopComponent } from './signop/signop.component';
import { MenuDocteurComponent } from './menu-docteur/menu-docteur.component';
import { DoctorAuthGuardService } from './doctor-auth-guard.service';
import { SignupDoctorComponent } from './signup-doctor/signup-doctor.component';
import { MesrdvComponent } from './mesrdv/mesrdv.component';
import { RdvcardComponent } from './rdvcard/rdvcard.component';
import { AlldoctorsComponent } from './alldoctors/alldoctors.component';
import { DocteurComponent } from './docteur/docteur.component';
import { PersonComponent } from './person/person.component';
import { DiagnosticComponent } from './diagnostic/diagnostic.component';
import { RdvComponent } from './rdv/rdv.component';
import { AuthGuardService as AuthGuard } from './services/auth-guard.service';
import { AboutusComponent } from './aboutus/aboutus.component';
import { RegistrationComponent } from './registration/registration.component';
import { SignupComponent } from './signup/signup.component';
import { NgModule, CanActivate } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoctorsComponent } from './doctors/doctors.component';
import { MespatientsComponent } from './mespatients/mespatients.component';


const routes: Routes = [
  { path:'Signup', component : SignupComponent},
  { path:'Registration', component : RegistrationComponent },
  { path:'Aboutus',component: AboutusComponent, canActivate: [AuthGuard]},
  { path:'rdv',component : RdvComponent},
  { path:'diagnostic',component: DiagnosticComponent,canActivate: [AuthGuard]},
  { path:'person',component: PersonComponent},
  { path:'Doctor',component: DocteurComponent},
  { path:'Doctors',component: DoctorsComponent, canActivate:[AuthGuard]},
  { path:'Doctors/:id',component: DocteurComponent},
  { path:'Doctors/new',component: DoctorsComponent},
  { path:'Mesrdv',component: MesrdvComponent},
  { path:'Alldoctors',component: AlldoctorsComponent, canActivate: [AuthGuard]},
  { path:'Signp',component: SignopComponent},
  { path:'Mespatients',component:MespatientsComponent},
  { path:'menuDocteur',component:MenuDocteurComponent},
  { path:'Admin',component :SigninAdminComponent},
  { path:'',component: HomeComponent},
  { path:'addDoctor',component: AddDoctorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
