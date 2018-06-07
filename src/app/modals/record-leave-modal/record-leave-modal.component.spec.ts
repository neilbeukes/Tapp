import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordLeaveModalComponent } from './record-leave-modal.component';

describe('RecordLeaveModalComponent', () => {
  let component: RecordLeaveModalComponent;
  let fixture: ComponentFixture<RecordLeaveModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordLeaveModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordLeaveModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
