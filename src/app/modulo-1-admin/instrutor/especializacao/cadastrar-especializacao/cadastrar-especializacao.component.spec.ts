import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarEspecializacaoComponent } from './cadastrar-especializacao.component';

describe('CadastrarEspecializacaoComponent', () => {
  let component: CadastrarEspecializacaoComponent;
  let fixture: ComponentFixture<CadastrarEspecializacaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastrarEspecializacaoComponent]
    });
    fixture = TestBed.createComponent(CadastrarEspecializacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
