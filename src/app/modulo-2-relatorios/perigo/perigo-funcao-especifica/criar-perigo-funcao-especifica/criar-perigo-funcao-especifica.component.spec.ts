import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarPerigoFuncaoEspecificaComponent } from './criar-perigo-funcao-especifica.component';

describe('CriarPerigoFuncaoEspecificaComponent', () => {
  let component: CriarPerigoFuncaoEspecificaComponent;
  let fixture: ComponentFixture<CriarPerigoFuncaoEspecificaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarPerigoFuncaoEspecificaComponent]
    });
    fixture = TestBed.createComponent(CriarPerigoFuncaoEspecificaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
