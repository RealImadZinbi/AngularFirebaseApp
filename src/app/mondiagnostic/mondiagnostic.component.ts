import { Router } from '@angular/router';
import { InteractionService } from './../interaction.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-mondiagnostic',
  templateUrl: './mondiagnostic.component.html',
  styleUrls: ['./mondiagnostic.component.css']
})
export class MondiagnosticComponent implements OnInit {
text; 
  constructor(private interactionService :InteractionService,
              private dialogRef: MatDialogRef,
              private router: Router) {
    this.interactionService.li$.subscribe(res =>
      { this.text = res })
   }

  ngOnInit(): void {
    
  }
  close() {
    this.dialogRef.close();
    this.router.navigate(['/Alldoctors']);

}

}
