import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalCheckComponent } from './final-check.component';

describe('FinalCheckComponent', () => {
  let component: FinalCheckComponent;
  let fixture: ComponentFixture<FinalCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalCheckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinalCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
