import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarEnderecoComponent } from './cadastrar-endereco.component';

describe('CadastrarEnderecoComponent', () => {
  let component: CadastrarEnderecoComponent;
  let fixture: ComponentFixture<CadastrarEnderecoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastrarEnderecoComponent]
    });
    fixture = TestBed.createComponent(CadastrarEnderecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
