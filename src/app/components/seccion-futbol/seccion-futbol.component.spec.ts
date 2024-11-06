import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionFutbolComponent } from './seccion-futbol.component';

describe('SeccionFutbolComponent', () => {
  let component: SeccionFutbolComponent;
  let fixture: ComponentFixture<SeccionFutbolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeccionFutbolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionFutbolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
