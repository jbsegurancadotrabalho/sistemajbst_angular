import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarProficienciaComponent } from './criar-proficiencia.component';

describe('CriarProficienciaComponent', () => {
  let component: CriarProficienciaComponent;
  let fixture: ComponentFixture<CriarProficienciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarProficienciaComponent]
    });
    fixture = TestBed.createComponent(CriarProficienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
