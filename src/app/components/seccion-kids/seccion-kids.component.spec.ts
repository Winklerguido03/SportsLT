import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionKidsComponent } from './seccion-kids.component';

describe('SeccionKidsComponent', () => {
  let component: SeccionKidsComponent;
  let fixture: ComponentFixture<SeccionKidsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeccionKidsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionKidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
