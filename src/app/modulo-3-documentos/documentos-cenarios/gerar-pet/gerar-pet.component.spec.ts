import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerarPetComponent } from './gerar-pet.component';

describe('GerarPetComponent', () => {
  let component: GerarPetComponent;
  let fixture: ComponentFixture<GerarPetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GerarPetComponent]
    });
    fixture = TestBed.createComponent(GerarPetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
