import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglestudyComponent } from './singlestudy.component';

describe('SinglestudyComponent', () => {
  let component: SinglestudyComponent;
  let fixture: ComponentFixture<SinglestudyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglestudyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglestudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
