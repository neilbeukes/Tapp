import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteleavemodalComponent } from './delete-leave-modal.component';

describe('DeleteleavemodalComponent', () => {
  let component: DeleteleavemodalComponent;
  let fixture: ComponentFixture<DeleteleavemodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteleavemodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteleavemodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
