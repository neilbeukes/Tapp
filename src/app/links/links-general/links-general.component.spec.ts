import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksGeneralComponent } from './links-general.component';

describe('LinksGeneralComponent', () => {
  let component: LinksGeneralComponent;
  let fixture: ComponentFixture<LinksGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinksGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinksGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
