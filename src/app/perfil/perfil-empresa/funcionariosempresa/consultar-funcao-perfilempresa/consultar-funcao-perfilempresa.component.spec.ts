import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarFuncaoPerfilempresaComponent } from './consultar-funcao-perfilempresa.component';

describe('ConsultarFuncaoPerfilempresaComponent', () => {
  let component: ConsultarFuncaoPerfilempresaComponent;
  let fixture: ComponentFixture<ConsultarFuncaoPerfilempresaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarFuncaoPerfilempresaComponent]
    });
    fixture = TestBed.createComponent(ConsultarFuncaoPerfilempresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
