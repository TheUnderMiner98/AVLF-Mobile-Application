import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { PDFDocument } from 'pdf-lib'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  userDetails: any = {};
  private subject =  new Subject<any>();

  fulton_county: Set<number> = new Set<number>();
  counties: number[] = [
    30004,
    30005,
    30009,
    30022,
    30023,
    30075,
    30076,
    30077,
    30097,
    30098,
    30213,
    30268,
    30272,
    30291,
    30301,
    30302,
    30303,
    30304,
    30305,
    30306,
    30307,
    30308,
    30309,
    30310,
    30311,
    30312,
    30313,
    30314,
    30315,
    30316,
    30318,
    30320,
    30321,
    30324,
    30325,
    30326,
    30327,
    30328,
    30331,
    30332,
    30334,
    30336,
    30337,
    30342,
    30343,
    30344,
    30348,
    30349,
    30350,
    30353,
    30354,
    30355,
    30357,
    30358,
    30361,
    30363,
    30364,
    30368,
    30369,
    30370,
    30371,
    30374,
    30375,
    30377,
    30378,
    30380,
    30384,
    30385,
    30388,
    30392,
    30394,
    30396,
    30398,
    31106,
    31126,
    31131,
    31136,
    31139,
    31150,
    31156,
    31192,
    31193,
    31195,
    31196
  ]

  constructor() {
    for(var i = 0 ; i < this.counties.length ; i++) {
      this.fulton_county.add(this.counties[i]);
    }
  }

  onMessage(): Observable<any> {
    return this.subject.asObservable();
  }

  send_message(message: string) {
    this.subject.next(message);
  }

  is_fulton_county(zipcode: number) {
    return this.fulton_county.has(zipcode);
  }

  is_georgia_state(zipcode: number) {
    return (zipcode >= 30000 && zipcode <= 31999) || (zipcode >= 39800 && zipcode <= 39999);
  }

  get_court_date() {
    return this.userDetails['court_date'];
  }


  /*
    Store functions
  */
  store_zipcode(zipcode: number, county: string) {
    this.userDetails['zipcode'] = zipcode;
    this.userDetails['county'] = county;
  }

  store_service_dates(service_date: string, filing_date: string) {
    this.userDetails['service date'] = service_date;
    this.userDetails['filing date'] = filing_date;
  }

  store_eviction_date(eviction_date: string, court_date: string) {
    this.userDetails['eviction date'] = eviction_date;
    this.userDetails['court_date'] = court_date;
  }

  store_general_info_1(email: string, case_number: string, name: string, landord_name: string) {
    this.userDetails['email'] = email;
    this.userDetails['case_number'] = case_number;
    this.userDetails['defendent_name'] = name;
    this.userDetails['plaintiff_name'] = landord_name;
  }

  store_general_info_2(adult: number, children: number) {
    this.userDetails['adult_count'] = adult;
    this.userDetails['children_count'] = children;
  }

  store_checkbox_info(checkbox1: boolean, checkbox2: boolean) {
    this.userDetails['plaintiff_not_landlord'] = checkbox1;
    this.userDetails['plaintiff_relationship'] = checkbox2;
  }

  store_checkbox_info2(checkbox: boolean[]) {
    this.userDetails['did_not_pay_rent_checkbox'] = checkbox;
  }

  store_checkbox_info3(checkbox: boolean[]) {
    this.userDetails['violate_terms_checkbox'] = checkbox;
  }

  store_checkbox_info4(checkbox: boolean[]) {
    this.userDetails['did_not_move_out_checkbox'] = checkbox;
  }

  store_checkbox_info5(checkbox: boolean[], amount: string[], reduced_value: number) {
    this.userDetails['counterclaim_checkbox'] = checkbox;
    this.userDetails['counterclaim_amounts'] = amount;
    this.userDetails['counterclaim_reduced_value'] = reduced_value;
  }

  store_checkbox_info6(checkbox: boolean[]) {
    this.userDetails['other_landlord_mistake'] = checkbox;
  }

  store_extra_checkbox(checkbox: boolean) {
    this.userDetails['landlord_terminated_lease'] = checkbox;
  }

  store_checkboxes(checkbox: number[]) {
    this.userDetails['checkbox'] = checkbox;
  }


  store_situation(description: string) {
    this.userDetails['case_description'] = description;
  }

  async fillForm() {
    const formUrl = '../../assets/answer_form.pdf'
    const formPdfBytes = await fetch(formUrl).then(res => res.arrayBuffer());

    const pdfDoc = await PDFDocument.load(formPdfBytes);
    const form = pdfDoc.getForm();

    // 1. Set the plaintiff Name
    const plaintiff = form.getTextField('Plaintiff');
    plaintiff.setText(this.userDetails['plaintiff_name']);

    // 2. Set the county
    const county = form.getTextField('County');
    county.setText(this.userDetails['county']);

    // 3. Set the defendant's name
    const defendant = form.getTextField('Defendant');
    defendant.setText(this.userDetails['defendent_name']);

    // 4. Set the Case number
    const case_number = form.getTextField('CaseNumber');
    case_number.setText(this.userDetails['case_number']);

    // 5. Set the Email
    const email = form.getTextField('Email');
    email.setText(this.userDetails['email']);

    // 6. Select the occupant for Who Am I
    const occupant = form.getCheckBox('WhoAmI-1');
    occupant.check();

    // 7. Defenses
    if(this.userDetails['plaintiff_not_landlord']) {
      const c1 = form.getCheckBox('C1');
      c1.check();
    }

    if(this.userDetails['plaintiff_relationship']) {
      const c2 = form.getCheckBox('C2');
      c2.check();
    }

    // Defenses
    // console.log(this.userDetails['checkbox']);
    for(var c of this.userDetails['checkbox']) {
      switch(c) {
        case 0:
          const c6 = form.getCheckBox('C6');
          c6.check();
          break;
        
        case 1:
          const c7 = form.getCheckBox('C7');
          c7.check();
          break;
        
        case 2: 
          const c8 = form.getCheckBox('C8');
          c8.check();
          break;

        case 3:
          const c9 = form.getCheckBox('C9');
          c9.check();
          break;

        case 16: 
          const c4 = form.getCheckBox('C4');
          c4.check();
          break;
        
        case 12: 
          const c5 = form.getCheckBox('C5');
          c5.check();
          break;

        case 100:
          const c100 = form.getCheckBox('C4');
          c100.check();
          break;
      }
    }

    // Counter Claims
    // Check if any counterclaim is selected
    var counter_claim: boolean = false;

    for(var i of this.userDetails['counterclaim_checkbox']) {
      if(i) {
        counter_claim = true;
        break;
      }
    }

    if(counter_claim) {
      var total_amount = 0;
      var amounts = [];

      for(var amount of this.userDetails['counterclaim_amounts']) {
        var num = parseFloat(amount);
        

        if(!isNaN(num)) {
          total_amount += num;
          amounts.push(num);
        } else {
          amounts.push(0);
        }
      }

      // Set the total amount checkbox
      const c12 = form.getCheckBox('C12');
      c12.check();

      const amount1 = form.getTextField('Amount1');
      amount1.setText(total_amount + "");

      /**
       * 9 - C13
       * 10 - C14
       * 11 - C15
       */
      for(var c of this.userDetails['checkbox']) {
        switch(c) {
          case 9:
            const c13 = form.getCheckBox('C13');
            c13.check();

            const amount2 = form.getTextField('Amount2');
            amount2.setText(amounts[0] + "");

            break;
          
          case 10:
            const c14 = form.getCheckBox('C14');
            c14.check();

            const amount4 = form.getTextField('Amount4');
            amount4.setText(amounts[1] + "");

            break;
          
          case 11: 
            const c15 = form.getCheckBox('C15');
            c15.check();

            const amount3 = form.getTextField('Amount3');
            amount3.setText(amounts[2] + "");

            break;
        }
      }
    }

    const name = form.getTextField('Name');
    name.setText(this.userDetails['defendent_name']);

    const pdf_bytes = await pdfDoc.save();
    // download(pdfBytes, "pdf-lib_creation_example.pdf", "application/pdf");
    return pdf_bytes;
  }
}
