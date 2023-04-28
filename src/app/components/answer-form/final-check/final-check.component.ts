import { Component } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { MatDialog } from '@angular/material/dialog';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ExitComponent } from '../exit/exit.component';

@Component({
  selector: 'app-final-check',
  templateUrl: './final-check.component.html',
  styleUrls: ['./final-check.component.css']
})
export class FinalCheckComponent {
  public pdf_bytes: any;
  public counter = 0;
  public date: any;

  constructor(private fb: FormBuilder,
    private dataService: DataService,
    private router: Router,
    public dialog: MatDialog) {
    this.dataService.fillForm().then((bytes) => {
      console.log(bytes);
      this.pdf_bytes = bytes;

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
    })
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

  next_step() {
    this.counter++;
  }

  prev_step() {
    if (this.counter > 0)
      this.counter--;
  }

  previous_component() {
    this.dataService.send_message('defenses');
  }

  save_pdf() {
    const blob = new Blob([this.pdf_bytes], { type: 'application/pdf' });
    try {
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      if (link.download !== undefined) { // feature detection
        link.setAttribute('href', url);
        link.setAttribute('download', 'answer_form.pdf');
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    } catch (e) {
      console.error('BlobToSaveAs error', e);
    }
  }

  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs
      .sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        e.target as HTMLFormElement,
        'YOUR_USER_ID'
      )
      .then(
        (result: EmailJSResponseStatus) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  next_component() {
    this.router.navigate(['next-steps']);
  }
}
