import { Component } from '@angular/core';
import { Coordonne } from 'src/app/models/coordonne';
import { ServicesService } from 'src/app/services/services.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Mobilite } from 'src/app/models/mobilite';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { SuccesscoordonneComponent } from 'src/app/successcoordonne/successcoordonne.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-coordonne',
  templateUrl: './coordonne.component.html',
  styleUrls: ['./coordonne.component.css']
})
export class CoordonneComponent {
  myForm: FormGroup;
  constructor(private lesservices: ServicesService, private dialog: MatDialog, private route: ActivatedRoute, private router: Router , private formBuilder: FormBuilder) {


    this.myForm = this.formBuilder.group({
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      moyenne1: ['', [Validators.required, Validators.min(0), Validators.max(20), Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
      moyenne2: ['', [Validators.required, Validators.min(0), Validators.max(20), Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
      moyenne3: ['', [Validators.required, Validators.min(0), Validators.max(20), Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
      gmail: ['', [Validators.required,Validators.email]],
      identifiantEsprit: ['', [Validators.required, Validators.pattern(/^\d{3}[a-zA-Z]{3}\d{4}$/)]],
     classeActuelle: ['', [Validators.required]],
      departement: ['', [Validators.required]],
      option: ['', [Validators.required]],
      niveaua: ['', [Validators.required]],
      niveauf: ['', [Validators.required]],
      //fichierCV: ['', [Validators.required]],


    });   }
  
  idMob!: any;


  

  ngOnInit(): void {
    this.idMob = this.route.snapshot.params['idMobilite'] 

  }

  mobilite: Mobilite = new Mobilite();


  coordonne: Coordonne = new Coordonne();
/*
  myForm = new FormGroup({
    nom: new FormControl('', [
      Validators.required
    
    ])
  });

  get nom (){
    return this.myForm.get('nom')
  }
*/
  onSubmit = () => {
    this.lesservices.ajouterCoordonne(this.coordonne, this.idMob, 1)
      .subscribe(() => {
        this.openSuccessDialog(); // Afficher le pop-up de succès
        setTimeout(() => {
          this.dialog.closeAll(); // Ferme tous les dialogues
          this.router.navigate(['/list']);
        }, 3000);
      }

    );
  }


  openSuccessDialog() {
    const dialogRef = this.dialog.open(SuccesscoordonneComponent);
  }

}
