import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarFaturamentoPfComponent } from './cadastrar-faturamento-pf.component';

describe('CadastrarFaturamentoPfComponent', () => {
  let component: CadastrarFaturamentoPfComponent;
  let fixture: ComponentFixture<CadastrarFaturamentoPfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastrarFaturamentoPfComponent]
    });
    fixture = TestBed.createComponent(CadastrarFaturamentoPfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
