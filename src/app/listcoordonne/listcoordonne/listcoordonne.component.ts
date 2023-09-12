import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Coordonne } from 'src/app/models/coordonne';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-listcoordonne',
  templateUrl: './listcoordonne.component.html',
  styleUrls: ['./listcoordonne.component.css']
})
export class ListcoordonneComponent {
  constructor(private lesservices: ServicesService, private route: ActivatedRoute, private router: Router) { this.idMob = this.route.snapshot.params['idMobilite'] }
  idMob!: any;

  ngOnInit(): void {
   
    this.getCoordonne()

  }
  public allcoordonne: any = [];

  getCoordonne() {
    this.lesservices.getCoordonneeByMobilite(this.idMob).subscribe(res => {
      this.allcoordonne.push(...res);

      // Tri des coordonnées par moyenne décroissante
      this.allcoordonne.sort((a: Coordonne, b: Coordonne) => b.moyenne - a.moyenne);

      console.log(this.allcoordonne);
    });
  }


}
