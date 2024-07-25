import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarEmpresaComponent } from './cadastrar-empresa.component';

describe('CadastrarEmpresaComponent', () => {
  let component: CadastrarEmpresaComponent;
  let fixture: ComponentFixture<CadastrarEmpresaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastrarEmpresaComponent]
    });
    fixture = TestBed.createComponent(CadastrarEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
