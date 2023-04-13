import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourtHearingHelperComponent } from './court-hearing-helper.component';

describe('CourtHearingHelperComponent', () => {
  let component: CourtHearingHelperComponent;
  let fixture: ComponentFixture<CourtHearingHelperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourtHearingHelperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourtHearingHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
