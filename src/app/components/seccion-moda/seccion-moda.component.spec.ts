import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionModaComponent } from './seccion-moda.component';

describe('SeccionModaComponent', () => {
  let component: SeccionModaComponent;
  let fixture: ComponentFixture<SeccionModaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeccionModaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionModaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
