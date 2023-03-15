import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextbedComponent } from './nextbed.component';

describe('NextbedComponent', () => {
  let component: NextbedComponent;
  let fixture: ComponentFixture<NextbedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextbedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NextbedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
