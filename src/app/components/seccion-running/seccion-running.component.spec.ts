import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionRunningComponent } from './seccion-running.component';

describe('SeccionRunningComponent', () => {
  let component: SeccionRunningComponent;
  let fixture: ComponentFixture<SeccionRunningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeccionRunningComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionRunningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
