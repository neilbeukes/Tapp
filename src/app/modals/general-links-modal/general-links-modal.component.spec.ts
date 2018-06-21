import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralLinksModalComponent } from './general-links-modal.component';

describe('GeneralLinksModalComponent', () => {
  let component: GeneralLinksModalComponent;
  let fixture: ComponentFixture<GeneralLinksModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralLinksModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralLinksModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
