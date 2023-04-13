import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { FileAnswerComponent } from '../components/answer-form/file-answer/file-answer.component';

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

  store_situation(description: string) {
    this.userDetails['case_description'] = description;
  }
}
