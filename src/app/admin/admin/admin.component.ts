import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogComponent } from 'src/app/dialog/dialog.component';
import { ErrorDialogComponent } from 'src/app/error-dialog/error-dialog.component';
import { User } from 'src/app/models/user';
import { ServicesService } from 'src/app/services/services.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
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
            this.router.navigate(['/listadmin']);
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

}
