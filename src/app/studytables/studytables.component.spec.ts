import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudytablesComponent } from './studytables.component';

describe('StudytablesComponent', () => {
  let component: StudytablesComponent;
  let fixture: ComponentFixture<StudytablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudytablesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudytablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
