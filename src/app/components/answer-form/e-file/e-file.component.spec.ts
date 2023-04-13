import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EFileComponent } from './e-file.component';

describe('EFileComponent', () => {
  let component: EFileComponent;
  let fixture: ComponentFixture<EFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EFileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
