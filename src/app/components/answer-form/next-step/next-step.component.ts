import { Component } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { MatDialog } from '@angular/material/dialog';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ExitComponent } from '../exit/exit.component';

@Component({
  selector: 'app-next-step',
  templateUrl: './next-step.component.html',
  styleUrls: ['./next-step.component.css']
})
export class NextStepComponent {
  public date: any;

  constructor(private fb: FormBuilder,
    private dataService: DataService,
    private router: Router,
    public dialog: MatDialog) {
      // Get the date
      this.date = this.dataService.get_court_date();
      if (!this.date) {
        const date = new Date();
        const current_date_arr = date.toDateString().split(" ");
        const service_date = current_date_arr[1] + " " + current_date_arr[2] + ", " + current_date_arr[3];
        const time_to_add = 7 * 24 * 60 * 60 * 1000

        date.setTime(date.getTime() + time_to_add);
        const arr = date.toDateString().split(" ");
        this.date = arr[1] + " " + arr[2] + ", " + arr[3];
      }
  }

  open_exit_dialog(): void {
    const dialogRef = this.dialog.open(ExitComponent, {
      height: '25%',
      width: '70%'
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });
  }

  go_to_court() {
    this.router.navigate(['court-hearing']);
  }
}
