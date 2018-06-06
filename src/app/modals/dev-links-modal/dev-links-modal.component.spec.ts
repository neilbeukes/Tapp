import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevLinksModalComponent } from './dev-links-modal.component';

describe('DevLinksModalComponent', () => {
  let component: DevLinksModalComponent;
  let fixture: ComponentFixture<DevLinksModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevLinksModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevLinksModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
