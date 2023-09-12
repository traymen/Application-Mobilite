import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { ServicesService } from 'src/app/services/services.service';
import { SuccessDialogComponent } from 'src/app/success-dialog/success-dialog.component';
@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.css']
})
export class UserregisterComponent {
  user: User = new User();
  myForm: FormGroup;

  constructor(private lesservices: ServicesService, private dialog: MatDialog, private router: Router, private formBuilder: FormBuilder) { 

    this.myForm = this.formBuilder.group({

      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), // Au moins 8 caractères
        this.customPasswordValidator,]],



    });
  }


  customPasswordValidator(control: AbstractControl) {
    const value = control.value;
    if (!/[A-Z]/.test(value) || !/\d/.test(value)) {
      return { customPassword: true };
    }
    return null;
  }


  onSubmit = () => {
    this.lesservices.ajouterUser(this.user)
      .subscribe(
        (response) => {
          console.log('Utilisateur ajouté avec succès :', response);
        //  this.user = new User(); // Réinitialisation du formulaire
          this.openSuccessDialog(); // Afficher le pop-up de succès
          setTimeout(() => {
            this.dialog.closeAll(); // Ferme tous les dialogues
            this.router.navigate(['/']);
          }, 3000);
        },
        (error) => {
          console.error('Erreur lors de l\'ajout de l\'utilisateur :', error);
        }
      );
  }

  openSuccessDialog() {
    const dialogRef = this.dialog.open(SuccessDialogComponent);
  }
}
