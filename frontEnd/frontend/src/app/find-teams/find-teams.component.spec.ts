import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindTeamsComponent } from './find-teams.component';

describe('FindTeamsComponent', () => {
  let component: FindTeamsComponent;
  let fixture: ComponentFixture<FindTeamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindTeamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
