import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcronymModalComponent } from './acronym-modal.component';

describe('AcronymModalComponent', () => {
  let component: AcronymModalComponent;
  let fixture: ComponentFixture<AcronymModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcronymModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcronymModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
