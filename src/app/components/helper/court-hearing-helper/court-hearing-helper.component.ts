import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-court-hearing-helper',
  templateUrl: './court-hearing-helper.component.html',
  styleUrls: ['./court-hearing-helper.component.css']
})
export class CourtHearingHelperComponent {
  open: boolean[] = [false, false, false, false, false, false, false];
  constructor(
    private router: Router
  ) {}

  go_to_helper() {
    this.router.navigate(['helper']);
  }

  go_to_home() {
    this.router.navigate(['']);
  }

  go_to_form() {
    this.router.navigate(['file-answer']);
  }
}
