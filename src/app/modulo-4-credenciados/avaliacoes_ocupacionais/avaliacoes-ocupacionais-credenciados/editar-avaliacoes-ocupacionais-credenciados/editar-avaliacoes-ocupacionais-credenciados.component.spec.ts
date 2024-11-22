import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAvaliacoesOcupacionaisCredenciadosComponent } from './editar-avaliacoes-ocupacionais-credenciados.component';

describe('EditarAvaliacoesOcupacionaisCredenciadosComponent', () => {
  let component: EditarAvaliacoesOcupacionaisCredenciadosComponent;
  let fixture: ComponentFixture<EditarAvaliacoesOcupacionaisCredenciadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarAvaliacoesOcupacionaisCredenciadosComponent]
    });
    fixture = TestBed.createComponent(EditarAvaliacoesOcupacionaisCredenciadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
