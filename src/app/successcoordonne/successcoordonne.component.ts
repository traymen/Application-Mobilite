import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-successcoordonne',
  templateUrl: './successcoordonne.component.html',
  styleUrls: ['./successcoordonne.component.css']
})
export class SuccesscoordonneComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
}
