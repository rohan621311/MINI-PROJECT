import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SofasloungesComponent } from './sofaslounges.component';

describe('SofasloungesComponent', () => {
  let component: SofasloungesComponent;
  let fixture: ComponentFixture<SofasloungesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SofasloungesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SofasloungesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
