import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvunitComponent } from './tvunit.component';

describe('TvunitComponent', () => {
  let component: TvunitComponent;
  let fixture: ComponentFixture<TvunitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvunitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvunitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
