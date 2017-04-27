import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HallCompComponent } from './hall-comp.component';

describe('HallCompComponent', () => {
  let component: HallCompComponent;
  let fixture: ComponentFixture<HallCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HallCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HallCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
