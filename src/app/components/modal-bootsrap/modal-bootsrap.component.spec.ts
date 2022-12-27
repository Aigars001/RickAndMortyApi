import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBootsrapComponent } from './modal-bootsrap.component';

describe('ModalBootsrapComponent', () => {
  let component: ModalBootsrapComponent;
  let fixture: ComponentFixture<ModalBootsrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalBootsrapComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalBootsrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
