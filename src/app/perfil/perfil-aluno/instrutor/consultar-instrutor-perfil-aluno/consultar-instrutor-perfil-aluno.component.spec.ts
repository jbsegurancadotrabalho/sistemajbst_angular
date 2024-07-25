import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarInstrutorPerfilAlunoComponent } from './consultar-instrutor-perfil-aluno.component';

describe('ConsultarInstrutorPerfilAlunoComponent', () => {
  let component: ConsultarInstrutorPerfilAlunoComponent;
  let fixture: ComponentFixture<ConsultarInstrutorPerfilAlunoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarInstrutorPerfilAlunoComponent]
    });
    fixture = TestBed.createComponent(ConsultarInstrutorPerfilAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
