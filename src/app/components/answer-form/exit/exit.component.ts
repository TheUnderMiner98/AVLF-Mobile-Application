import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FileAnswerComponent } from '../file-answer/file-answer.component';

@Component({
  selector: 'app-exit',
  templateUrl: './exit.component.html',
  styleUrls: ['./exit.component.css']
})
export class ExitComponent {
  constructor(
    private router: Router,
    public dialogRef: MatDialogRef<ExitComponent>
  ) {}

  cancel(): void {
    this.dialogRef.close();
  }

  go_to_home() {
    this.dialogRef.close();
    this.router.navigate(['']);
  }
}
