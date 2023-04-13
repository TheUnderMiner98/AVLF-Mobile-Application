import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryHomeComponent } from './secondary-home.component';

describe('SecondaryHomeComponent', () => {
  let component: SecondaryHomeComponent;
  let fixture: ComponentFixture<SecondaryHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondaryHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondaryHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
