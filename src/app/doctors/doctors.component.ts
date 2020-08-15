import { InteractionService } from './../interaction.service';
import { UpdateComponent } from './../update/update.component';
import { Doc } from './../doc.model';
import { DoctorService } from './../doctor.service';
import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {
doctor: Doc[];
editState: boolean = false;
docToedit: Doc;
  constructor(
    private doctorService: DoctorService,
    private dialog: MatDialog,
    private intercationService: InteractionService
    ) {
   }
 

  ngOnInit(): void {
      // we added this so that when the backdrop is clicked the modal is closed.
     
    this.doctorService.getDoctors().subscribe(data => {
      this.doctor = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Doc;
      })
    });

  }
  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.hasBackdrop=true;
    dialogConfig.disableClose=false;

    this.dialog.open(UpdateComponent, dialogConfig);
}
  editDoctor($event,doctor) {
    this.editState=true;
    this.docToedit=doctor;
  }
 sendData(doctor: Doc) {
   this.intercationService.sendMessage(doctor);
 }  
 deleteDoc(doctor: Doc) {
   this.doctorService.deleteDoctor(doctor);
 }
}
