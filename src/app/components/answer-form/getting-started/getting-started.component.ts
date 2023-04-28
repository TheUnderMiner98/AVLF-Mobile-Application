import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../../../../src/app/service/data.service';
import { Router } from '@angular/router';
import { EFileComponent } from '../e-file/e-file.component';
import { ExitComponent } from '../exit/exit.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-getting-started',
  templateUrl: './getting-started.component.html',
  styleUrls: ['./getting-started.component.css']
})
export class GettingStartedComponent {
  counter: number = 0;
  
  is_fulton_county: boolean = false;
  is_georgia_state: boolean = false;
  zipcode_length = 0;
  filing_date: any;
  
  eviction_notice: string = '';
  warrant: string = '';
  eviction_date: string = '';
  writ: string = '';

  zipcodeForm: FormGroup = this.fb.group(
    {
      zipcode: ['', [Validators.required, Validators.maxLength(5), Validators.minLength(5)]],
      county: ['', Validators.required]
    }
  );

  serviceDateForm: FormGroup = this.fb.group(
    {
      date: ['', Validators.required],
    }
  );

  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    private router: Router,
    public dialog: MatDialog,
    private location: Location,
  ) {}

  open_exit_dialog(): void {
    const dialogRef = this.dialog.open(ExitComponent, {
      height: '25%',
      width: '70%'
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });
  }

  get controls(): { [p: string]: AbstractControl } {
    return this.zipcodeForm.controls;
  }

  next_step() {
    this.counter++;
  }

  prev_step() {
    if(this.counter > 0)
      this.counter--;
  }

  check_zip_code() {
    var zipcode = parseInt(this.zipcodeForm.controls['zipcode'].value);
    this.is_fulton_county = this.dataService.is_fulton_county(zipcode);
    this.is_georgia_state = this.dataService.is_georgia_state(zipcode);
    this.zipcode_length = zipcode.toString().length;
  }

  open_dialog() {
    this.dialog.open(EFileComponent, {
      width: '60vh',
      height: '20vh'
    });
  }

  calculate_date() {
    const current_date = this.serviceDateForm.controls['date'].value;
    const date = new Date(current_date);
    const current_date_arr = date.toDateString().split(" ");
    const service_date = current_date_arr[1] + " " + current_date_arr[2] + ", " + current_date_arr[3];
    const time_to_add = 10 * 24 * 60 * 60 * 1000

    date.setTime(date.getTime() + time_to_add);
    const arr = date.toDateString().split(" ");
    this.filing_date = arr[1] + " " + arr[2] + ", " + arr[3];

    // Store the service and court date
    this.dataService.store_service_dates(service_date, this.filing_date);

    this.next_step();
  }

  store_zipcode() {
    const zipcode = this.controls['zipcode'].value;
    const county = this.controls['county'].value;

    this.dataService.store_zipcode(zipcode, county);
    
    this.next_step();
  }

  next_component() {
    this.router.navigate(['tenancy']);
    // this.location.replaceState('/tenancy');
  }
}
