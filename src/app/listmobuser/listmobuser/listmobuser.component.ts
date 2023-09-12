import { Component } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-listmobuser',
  templateUrl: './listmobuser.component.html',
  styleUrls: ['./listmobuser.component.css']
})
export class ListmobuserComponent {

  constructor(private lesservices: ServicesService, private router: Router) { }



  ngOnInit(): void {

    this.listemobilite();
  }

  public allmobilite: any = [];
  listemobilite(): void {
    this.lesservices.gestmobilite().subscribe(data => {
      //   console.log(data)
      this.allmobilite.push(...data)
    });
  }

  detail(mobilite: any) {
    console.log("Mobilite:", mobilite);
    const url = '/coordonne/' + mobilite.idMobilite;
    console.log("Redirection URL:", url);
    this.router.navigateByUrl(url);
  }




  user: User = new User();
 /* 
  onSubmit() {
    this.lesservices.userDisonnect()
      .subscribe(
        () => {
          console.log('Déconnexion réussie');
          this.router.navigate(['/']);


        },
        (error) => {
          console.error('Erreur lors de la déconnexion :', error); // Gérer les erreurs en cas d'échec de déconnexion
        }
      );
  }

 */
  onSubmit() {
    this.lesservices.userDisonnect().subscribe(
      () => {
        this.router.navigate(['/']);

        // Code à exécuter après la déconnexion réussie, par exemple, rediriger l'utilisateur vers la page de connexion.
      },
      (error) => {
        console.error('Erreur lors de la déconnexion :', error);
      }
    );
  }






}
