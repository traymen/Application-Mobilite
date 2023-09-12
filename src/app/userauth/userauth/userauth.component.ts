import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogComponent } from 'src/app/dialog/dialog.component';
import { ErrorDialogComponent } from 'src/app/error-dialog/error-dialog.component';
import { User } from 'src/app/models/user';
import { ServicesService } from 'src/app/services/services.service';
import { SuccessDialogComponent } from 'src/app/success-dialog/success-dialog.component';

@Component({
  selector: 'app-userauth',
  templateUrl: './userauth.component.html',
  styleUrls: ['./userauth.component.css']
})
export class UserauthComponent {
  user: User = new User();
 
  constructor(private lesservices: ServicesService, private router: Router, private dialog: MatDialog) { }

  onSubmit() {
    this.lesservices.userConnect(this.user)
      .subscribe(
        (response) => {
          console.log('Utilisateur connecté avec succès :', response);
          this.openSuccessDialog(); // Afficher le dialogue de succès
          setTimeout(() => {
            this.dialog.closeAll(); // Ferme tous les dialogues
            this.router.navigate(['/list']);
          }, 3000);
         }, // Attendre 3 secondes        },
        (error) => {
          console.error('Erreur lors de la connexion de l\'utilisateur :', error);
          this.openErrorDialog(); // Afficher le dialogue reussite
          setTimeout(() => {
            this.dialog.closeAll(); // Ferme tous les dialogues
           window.location.reload(); 
          }, 3000);
          
        }
      );
  }

  openSuccessDialog() {
    this.dialog.open(DialogComponent);
  }

  openErrorDialog() {
    this.dialog.open(ErrorDialogComponent);
  }

  showPassword = false; 


  
}
