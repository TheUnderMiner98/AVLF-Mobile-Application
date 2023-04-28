import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-answer-form-helper',
  templateUrl: './answer-form-helper.component.html',
  styleUrls: ['./answer-form-helper.component.css']
})
export class AnswerFormHelperComponent {
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
