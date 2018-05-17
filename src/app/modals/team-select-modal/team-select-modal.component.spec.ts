import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamSelectModalComponent } from './team-select-modal.component';

describe('TeamSelectModalComponent', () => {
  let component: TeamSelectModalComponent;
  let fixture: ComponentFixture<TeamSelectModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamSelectModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamSelectModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
