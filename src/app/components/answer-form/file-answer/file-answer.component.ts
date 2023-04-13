import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ExitComponent } from '../exit/exit.component';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-file-answer',
  templateUrl: './file-answer.component.html',
  styleUrls: ['./file-answer.component.css']
})
export class FileAnswerComponent {
  selected: string = "defenses";
  subscription: Subscription;

  constructor(
    private router: Router,
    public dialog: MatDialog,
    private dataService: DataService
  ) {
    this.subscription = this.dataService.onMessage().subscribe((message) => {
      if(message) {
        // console.log(message);
        this.selected = message;
      }
    });
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
}
