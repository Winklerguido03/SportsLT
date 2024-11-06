import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnVerMasComponent } from './btn-ver-mas.component';

describe('BtnVerMasComponent', () => {
  let component: BtnVerMasComponent;
  let fixture: ComponentFixture<BtnVerMasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnVerMasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnVerMasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
