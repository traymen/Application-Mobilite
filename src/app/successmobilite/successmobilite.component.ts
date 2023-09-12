import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-successmobilite',
  templateUrl: './successmobilite.component.html',
  styleUrls: ['./successmobilite.component.css']
})
export class SuccessmobiliteComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
}
