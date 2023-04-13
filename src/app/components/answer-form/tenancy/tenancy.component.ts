import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../../../../src/app/service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tenancy',
  templateUrl: './tenancy.component.html',
  styleUrls: ['./tenancy.component.css']
})
export class TenancyComponent {
  counter: number = 0;
  
  generalInfoForm: FormGroup = this.fb.group(
    {
      email: ['', [Validators.required, Validators.email]],
      case_number: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
      plaintiff_name: ['', Validators.required],
      defendent_name: ['', Validators.required]
    }
  );

  adult_count : number = 1;
  children_count : number = 0;

  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  get controls(): { [p: string]: AbstractControl } {
    return this.generalInfoForm.controls;
  }

  next_step() {
    this.counter++;
  }

  prev_step() {
    if(this.counter > 0)
      this.counter--;
  }

  save_details_1() {
    const email = this.generalInfoForm.controls['email'].value;
    const case_number = this.generalInfoForm.controls['case_number'].value;
    const plaintiff_name = this.generalInfoForm.controls['plaintiff_name'].value;
    const defendent_name = this.generalInfoForm.controls['defendent_name'].value;

    this.dataService.store_general_info_1(email, case_number, defendent_name, plaintiff_name);

    this.next_step();
  }

  save_details_2() {
    this.dataService.store_general_info_2(this.adult_count, this.children_count);

    this.dataService.send_message('defenses');
  }

  subtract_adult() {
    if(this.adult_count > 0) 
      this.adult_count--;
  }

  add_adult() {
    this.adult_count++;
  }

  subtract_child() {
    if(this.children_count > 0) 
      this.children_count--;
  }

  add_child() {
    this.children_count++;
  }
}
