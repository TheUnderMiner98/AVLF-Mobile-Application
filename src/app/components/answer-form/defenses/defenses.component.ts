import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../../../../src/app/service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-defenses',
  templateUrl: './defenses.component.html',
  styleUrls: ['./defenses.component.css']
})
export class DefensesComponent {
  counter: number = 1;
  plaintiff_checkbox_1 : boolean = false;
  plaintiff_checkbox_2 : boolean = false;

  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  next_step() {
    this.counter++;
  }

  prev_step() {
    if(this.counter > 0)
      this.counter--;
  }

  save_checkbox() {
    this.dataService.store_checkbox_info(this.plaintiff_checkbox_1, this.plaintiff_checkbox_2);

    this.next_step();
  }
}
