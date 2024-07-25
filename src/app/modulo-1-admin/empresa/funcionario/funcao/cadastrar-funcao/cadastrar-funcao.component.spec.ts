import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarFuncaoComponent } from './cadastrar-funcao.component';

describe('CadastrarFuncaoComponent', () => {
  let component: CadastrarFuncaoComponent;
  let fixture: ComponentFixture<CadastrarFuncaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastrarFuncaoComponent]
    });
    fixture = TestBed.createComponent(CadastrarFuncaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
