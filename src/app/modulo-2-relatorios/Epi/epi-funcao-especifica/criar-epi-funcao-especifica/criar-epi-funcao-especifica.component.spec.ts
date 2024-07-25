import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarEpiFuncaoEspecificaComponent } from './criar-epi-funcao-especifica.component';

describe('CriarEpiFuncaoEspecificaComponent', () => {
  let component: CriarEpiFuncaoEspecificaComponent;
  let fixture: ComponentFixture<CriarEpiFuncaoEspecificaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarEpiFuncaoEspecificaComponent]
    });
    fixture = TestBed.createComponent(CriarEpiFuncaoEspecificaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
