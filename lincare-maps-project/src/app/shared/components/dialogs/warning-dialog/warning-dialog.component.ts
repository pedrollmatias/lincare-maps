import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-warning-dialog',
  templateUrl: './warning-dialog.component.html',
  styleUrls: ['./warning-dialog.component.scss']
})
export class WarningDialogComponent {

  constructor(public dialogRef: MatDialogRef<WarningDialogComponent>, 
  	@Inject(MAT_DIALOG_DATA) public data: any) { }

}
