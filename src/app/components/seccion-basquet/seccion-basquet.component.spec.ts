import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionBasquetComponent } from './seccion-basquet.component';

describe('SeccionBasquetComponent', () => {
  let component: SeccionBasquetComponent;
  let fixture: ComponentFixture<SeccionBasquetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeccionBasquetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionBasquetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
