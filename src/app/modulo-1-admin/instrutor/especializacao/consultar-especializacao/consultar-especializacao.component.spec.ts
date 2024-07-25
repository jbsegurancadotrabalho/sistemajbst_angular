import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarEspecializacaoComponent } from './consultar-especializacao.component';

describe('ConsultarEspecializacaoComponent', () => {
  let component: ConsultarEspecializacaoComponent;
  let fixture: ComponentFixture<ConsultarEspecializacaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarEspecializacaoComponent]
    });
    fixture = TestBed.createComponent(ConsultarEspecializacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
