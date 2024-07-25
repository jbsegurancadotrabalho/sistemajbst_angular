import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerarAcessoClientePessoafisicaComponent } from './gerar-acesso-cliente-pessoafisica.component';

describe('GerarAcessoClientePessoafisicaComponent', () => {
  let component: GerarAcessoClientePessoafisicaComponent;
  let fixture: ComponentFixture<GerarAcessoClientePessoafisicaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GerarAcessoClientePessoafisicaComponent]
    });
    fixture = TestBed.createComponent(GerarAcessoClientePessoafisicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
