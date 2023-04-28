import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../../../../src/app/service/data.service';
import { Router } from '@angular/router';
import { ExitComponent } from '../exit/exit.component';

@Component({
  selector: 'app-defenses',
  templateUrl: './defenses.component.html',
  styleUrls: ['./defenses.component.css']
})
export class DefensesComponent {
  counter: number = 0;
  checkboxes: number[] = [];

  icons: string[] = [];
  text: string[] = [];
  extra_text: string[] = [];
  amount: boolean[] = [];
  extra_amount: boolean[] = [];


  plaintiff_checkbox_1: boolean = false;
  plaintiff_checkbox_2: boolean = false;

  did_not_pay_rent_checkboxes: boolean[] = [false, false, false, false, false];

  violate_terms_checkboxes: boolean[] = [false, false];

  did_not_move_out_checkboxes: boolean[] = [false, false];

  counterclaim_checkboxes: boolean[] = [false, false, false];
  counterclaim_amounts: string[] = ["", "", ""];
  counterclaim_reduced_value: number = 0;

  other_mistakes: boolean[] = [false, false, false, false, false, false];

  extra_option: boolean = false;

  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    private router: Router,
    public dialog: MatDialog
  ) {

    // Set the icons
    for (var i = 0; i < 17; i++) {
      var str: string = "../../../../assets/icon-" + (i + 2) + ".png";
      this.icons.push(str);
    }

    // Set the text
    this.text = [
      "I do not owe any rent to my landlord.",
      "I offered my rent <b>on time</b> but the landlord refused to accept it.",
      "My landlord would not accept my rent and the cost for this warrant\n<br>\n(It's a <a href='https://law.justia.com/codes/georgia/2010/title-44/chapter-7/article-3/44-7-52' target='_blank'>tender defense</a>)",
      "My landlord has failed to repair the property. The failure costs <b>more than the rent claimed.</b>\n<br>\n(How to <a href='https://law.justia.com/codes/georgia/2010/title-44/chapter-7/article-3/44-7-52' target='_blank'>calculate the cost</a>?)",
      "Other payment-related issues.",
      "I didn't do the misconduct that my landlord accused me of.",
      "Misconduct that my landlord accused me of is not listed in my lease.",
      "My lease has not ended.",
      "My landlord did not properly terminate my lease.",
      "Due to my landlord's failure to repair the property, its <b>value has reduced.</b>",
      "Since my landlord failed to make requested repairs, <b>I made these repairs and I have my receipts.</b>",
      "My landlord's failure to repair resulted in <b>damages to my person and/or properties.",
      "My landlord did not issue a <a href='https://law.justia.com/codes/georgia/2020/title-44/chapter-7/article-3/section-44-7-50/' target='_blank'>demand for possession</a> prior to filling in court.",
      "My landlord personally attempted to serve the eviction notice or I did not receive proper service.",
      "My landlord gave me time to pay up or leave, but they filed with the court before the given deadline",
      "My landlord <b>retaliated against me</b> by filing this eviction after I requested repairs or reported condition violations.",
      "My landlord terminated my lease without a valid reason.",
      "Other defenses.",
    ]

    // Extra text
    this.extra_text = [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "Value reduced each month for",
      "These repairs cost me",
      "Total estimated damage value was",
      "",
      "",
      "",
      "",
      "",
      "",
    ]

    this.amount = [
      false, 
      false,
      false,
      false,
      false, 
      false,
      false,
      false,
      false, 
      true,
      true,
      true,
      false, 
      false,
      false,
      false,
      false, 
      false
    ]

    this.extra_amount = [
      false, 
      false,
      false,
      false,
      false, 
      false,
      false,
      false,
      false, 
      true,
      false,
      false,
      false, 
      false,
      false,
      false,
      false, 
      false
    ];
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

  save_checkbox() {
    this.dataService.store_checkbox_info(this.plaintiff_checkbox_1, this.plaintiff_checkbox_2);

    this.next_step();
  }

  save_checkbox2() {
    this.dataService.store_checkbox_info2(this.did_not_pay_rent_checkboxes);

    for (var i = 0; i < this.did_not_pay_rent_checkboxes.length; i++) {
      if (this.did_not_pay_rent_checkboxes[i] && !this.checkboxes.includes(i)) {
        this.checkboxes.push(i);
      }
    }

    this.next_step();
  }

  save_checkbox3() {
    this.dataService.store_checkbox_info3(this.violate_terms_checkboxes);

    for (var i = 0; i < this.violate_terms_checkboxes.length; i++) {
      if (this.violate_terms_checkboxes[i] && !this.checkboxes.includes(i + 5)) {
        this.checkboxes.push(i + 5);
      }
    }

    this.next_step();
  }

  save_checkbox4() {
    this.dataService.store_checkbox_info4(this.did_not_move_out_checkboxes);

    for (var i = 0; i < this.did_not_move_out_checkboxes.length; i++) {
      if (this.did_not_move_out_checkboxes[i] && !this.checkboxes.includes(i + 7)) {
        this.checkboxes.push(i + 7);
      }
    }

    this.next_step();
  }

  save_checkbox5() {
    this.dataService.store_checkbox_info5(this.counterclaim_checkboxes, this.counterclaim_amounts, this.counterclaim_reduced_value);

    for (var i = 0; i < this.counterclaim_checkboxes.length; i++) {
      if (this.counterclaim_checkboxes[i] && !this.checkboxes.includes(i + 9)) {
        this.checkboxes.push(i + 9);
      }
    }

    this.next_step();
  }

  save_checkbox6() {
    this.dataService.store_checkbox_info6(this.other_mistakes);

    for (var i = 0; i < this.other_mistakes.length; i++) {
      if (this.other_mistakes[i] && !this.checkboxes.includes(i + 12)) {
        this.checkboxes.push(i + 12);
      }
    }

    this.next_step();

  }

  skip_two_steps() {
    this.counter += 2;
  }

  skip_two_steps_back() {
    if (this.counter >= 2)
      this.counter -= 2;
  }

  go_to_video() {

  }

  remove_item(i : number) {
    if(this.checkboxes.includes(i)) {
      this.checkboxes = this.checkboxes.filter(key => key != i);
    }
  }

  reset_counter() {
    this.counter = 1;
  }

  print_form() {
    // Service
    console.log(this.checkboxes);
    this.dataService.store_checkboxes(this.checkboxes);
    // this.dataService.send_message('final-check');
    this.router.navigate(['final-check']);
  }

  print_form2() {
    // Service
    if(this.extra_option) {
      this.dataService.store_extra_checkbox(this.extra_option);
      this.checkboxes.push(100);
      this.dataService.store_checkboxes(this.checkboxes);
    }

    console.log(this.checkboxes);
    // this.dataService.send_message('final-check');
    this.router.navigate(['final-check']);
  }
}
