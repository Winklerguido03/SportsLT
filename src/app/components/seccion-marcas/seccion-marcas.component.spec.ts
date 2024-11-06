import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionMarcasComponent } from './seccion-marcas.component';

describe('SeccionMarcasComponent', () => {
  let component: SeccionMarcasComponent;
  let fixture: ComponentFixture<SeccionMarcasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeccionMarcasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionMarcasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
