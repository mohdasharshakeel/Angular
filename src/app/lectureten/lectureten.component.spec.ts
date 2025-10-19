import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturetenComponent } from './lectureten.component';

describe('LecturetenComponent', () => {
  let component: LecturetenComponent;
  let fixture: ComponentFixture<LecturetenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LecturetenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LecturetenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
