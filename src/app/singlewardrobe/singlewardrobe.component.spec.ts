import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglewardrobeComponent } from './singlewardrobe.component';

describe('SinglewardrobeComponent', () => {
  let component: SinglewardrobeComponent;
  let fixture: ComponentFixture<SinglewardrobeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglewardrobeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglewardrobeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
