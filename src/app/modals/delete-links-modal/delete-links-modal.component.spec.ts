import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteLinksModalComponent } from './delete-links-modal.component';

describe('DeleteLinksModalComponent', () => {
  let component: DeleteLinksModalComponent;
  let fixture: ComponentFixture<DeleteLinksModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteLinksModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteLinksModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
