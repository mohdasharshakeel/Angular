import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LectureeventComponent } from './lectureevent.component';

describe('LectureeventComponent', () => {
  let component: LectureeventComponent;
  let fixture: ComponentFixture<LectureeventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LectureeventComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LectureeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
