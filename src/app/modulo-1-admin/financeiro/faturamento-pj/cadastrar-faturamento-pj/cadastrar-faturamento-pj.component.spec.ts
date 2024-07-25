import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarFaturamentoPjComponent } from './cadastrar-faturamento-pj.component';

describe('CadastrarFaturamentoPjComponent', () => {
  let component: CadastrarFaturamentoPjComponent;
  let fixture: ComponentFixture<CadastrarFaturamentoPjComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastrarFaturamentoPjComponent]
    });
    fixture = TestBed.createComponent(CadastrarFaturamentoPjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
