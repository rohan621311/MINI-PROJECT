import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglediningComponent } from './singledining.component';

describe('SinglediningComponent', () => {
  let component: SinglediningComponent;
  let fixture: ComponentFixture<SinglediningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglediningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglediningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
