import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Mobilite } from 'src/app/models/mobilite';
import { ServicesService } from 'src/app/services/services.service';
import { SuccessmobiliteComponent } from 'src/app/successmobilite/successmobilite.component';

@Component({
  selector: 'app-mobilite',
  templateUrl: './mobilite.component.html',
  styleUrls: ['./mobilite.component.css']
})
export class MobiliteComponent {
  myForm: FormGroup;

  constructor(private lesservices: ServicesService, private router: Router, private dialog: MatDialog, private formBuilder: FormBuilder) { 
    this.myForm = this.formBuilder.group({
     

      nomFac: ['', [Validators.required]],
      pays: ['', [Validators.required]],
      typeMobilite: ['', [Validators.required]],
      domaine: ['', [Validators.required]],
      dateD: ['', [Validators.required]],
      dateF: ['', [Validators.required]],
      option: ['', [Validators.required]],
     

    });
    
  }
 

  mobilite: Mobilite = new Mobilite();
/*
  onSubmit = () => {
    this.lesservices.ajouterMobilite(this.mobilite, 1)
      .subscribe(() => {
      }
    
    );


  //  this.mobilite = new Mobilite();

  }
  */
  onSubmit = () => {
    this.lesservices.ajouterMobilite(this.mobilite,  1)
      .subscribe(() => {
      }
      );
    this.openSuccessDialog(); // Afficher le pop-up de succès
    setTimeout(() => {
      this.dialog.closeAll(); // Ferme tous les dialogues
      this.router.navigate(['/listadmin']);
    }, 3000);

   // this.mobilite = new Mobilite();

  }

  
  openSuccessDialog() {
    const dialogRef = this.dialog.open(SuccessmobiliteComponent);
  }


}
