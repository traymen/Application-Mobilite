import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-listadmin',
  templateUrl: './listadmin.component.html',
  styleUrls: ['./listadmin.component.css']
})
export class ListadminComponent {
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
    console.log(mobilite)
    const url = '/listecoordonne/' + mobilite.idMobilite
    this.router.navigateByUrl(url)
  }

  idMobilite!: any;
  /*
  delete = () => {
    this.lesservices.deletMobilite(this.idMob)
      .subscribe(() => {
      }
      );
  }
  */
  onDelete = (idMobilite: number) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette mobilite?')) {
      this.lesservices.deletMobilite(idMobilite).subscribe(() => {
        // Recharge la page après la suppression
        window.location.reload();
      });
    }
  }
  
}
