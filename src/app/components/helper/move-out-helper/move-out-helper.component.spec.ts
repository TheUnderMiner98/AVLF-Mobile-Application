import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveOutHelperComponent } from './move-out-helper.component';

describe('MoveOutHelperComponent', () => {
  let component: MoveOutHelperComponent;
  let fixture: ComponentFixture<MoveOutHelperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoveOutHelperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoveOutHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
