import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteGeneralLinksModalComponent } from './delete-general-links-modal.component';

describe('DeleteGeneralLinksModalComponent', () => {
  let component: DeleteGeneralLinksModalComponent;
  let fixture: ComponentFixture<DeleteGeneralLinksModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteGeneralLinksModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteGeneralLinksModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
