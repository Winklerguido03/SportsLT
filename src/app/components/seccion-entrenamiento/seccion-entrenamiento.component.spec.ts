import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionEntrenamientoComponent } from './seccion-entrenamiento.component';

describe('SeccionEntrenamientoComponent', () => {
  let component: SeccionEntrenamientoComponent;
  let fixture: ComponentFixture<SeccionEntrenamientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeccionEntrenamientoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionEntrenamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
