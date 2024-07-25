import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerarPetFreeComponent } from './gerar-pet-free.component';

describe('GerarPetFreeComponent', () => {
  let component: GerarPetFreeComponent;
  let fixture: ComponentFixture<GerarPetFreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GerarPetFreeComponent]
    });
    fixture = TestBed.createComponent(GerarPetFreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
