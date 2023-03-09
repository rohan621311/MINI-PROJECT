import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingletvunitComponent } from './singletvunit.component';

describe('SingletvunitComponent', () => {
  let component: SingletvunitComponent;
  let fixture: ComponentFixture<SingletvunitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingletvunitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingletvunitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
