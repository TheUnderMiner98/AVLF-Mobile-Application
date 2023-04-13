import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-secondary-home',
  templateUrl: './secondary-home.component.html',
  styleUrls: ['./secondary-home.component.css']
})
export class SecondaryHomeComponent {
  constructor(
    private router: Router
  ) {}

  go_to_move_out() {
    this.router.navigate(['move-out']);
  }

  go_to_court_date() {
    this.router.navigate(['court-hearing']);
  }

  go_to_answer_form() {
    this.router.navigate(['answer-form']);
  }
}
