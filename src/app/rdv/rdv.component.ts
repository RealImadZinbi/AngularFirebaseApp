import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { rdvModel } from './../models/rdv.model';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-rdv',
  templateUrl: './rdv.component.html',
  styleUrls: ['./rdv.component.css']
})
export class RdvComponent implements OnInit {
rdv: rdvModel = new rdvModel();
rdvForm: FormGroup;
labelPosition: 'before' | 'after' = 'after';

  constructor(private FormBuilder: FormBuilder) {}

  ngOnInit() {
    this.rdvForm = this.FormBuilder.group({
      'name': [this.rdv.nom, [Validators.required]],
      'prenom': [this.rdv.prenom, [Validators.required]],
      'email': [this.rdv.email, [Validators.required,Validators.email]],
      'jour': [this.rdv.jour, [Validators.required]],
      'specialite': [this.rdv.specialite, [Validators.required]],
      'sexe': [this.rdv.sexe, [Validators.required]]

      
  });
}

}
