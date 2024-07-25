import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarFuncionarioEmpresaComponent } from './editar-funcionario-empresa.component';

describe('EditarFuncionarioEmpresaComponent', () => {
  let component: EditarFuncionarioEmpresaComponent;
  let fixture: ComponentFixture<EditarFuncionarioEmpresaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarFuncionarioEmpresaComponent]
    });
    fixture = TestBed.createComponent(EditarFuncionarioEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
