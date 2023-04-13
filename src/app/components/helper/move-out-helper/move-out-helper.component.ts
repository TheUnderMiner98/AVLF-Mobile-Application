import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-move-out-helper',
  templateUrl: './move-out-helper.component.html',
  styleUrls: ['./move-out-helper.component.css']
})
export class MoveOutHelperComponent {
  open: boolean[] = [false, false, false, false, false];
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
    this.router.navigate(['getting-started']);
  }
}
