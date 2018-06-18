import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardMessageModalComponent } from './board-message-modal.component';

describe('BoardMessageModalComponent', () => {
  let component: BoardMessageModalComponent;
  let fixture: ComponentFixture<BoardMessageModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardMessageModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardMessageModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
