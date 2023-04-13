import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerFormHelperComponent } from './answer-form-helper.component';

describe('AnswerFormHelperComponent', () => {
  let component: AnswerFormHelperComponent;
  let fixture: ComponentFixture<AnswerFormHelperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnswerFormHelperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnswerFormHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
