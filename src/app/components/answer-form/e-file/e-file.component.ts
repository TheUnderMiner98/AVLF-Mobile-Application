import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-e-file',
  templateUrl: './e-file.component.html',
  styleUrls: ['./e-file.component.css']
})
export class EFileComponent {
  constructor(public dialogRef: MatDialogRef<EFileComponent>) {}

  go_to_efile() {
    window.open("http://www.odysseyefilega.com/", "_blank");
  }
}
