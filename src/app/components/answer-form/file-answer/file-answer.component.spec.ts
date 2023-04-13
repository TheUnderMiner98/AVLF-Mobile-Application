import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileAnswerComponent } from './file-answer.component';

describe('FileAnswerComponent', () => {
  let component: FileAnswerComponent;
  let fixture: ComponentFixture<FileAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileAnswerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
