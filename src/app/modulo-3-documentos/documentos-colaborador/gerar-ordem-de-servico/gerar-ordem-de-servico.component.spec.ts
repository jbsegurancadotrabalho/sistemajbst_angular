import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerarOrdemDeServicoComponent } from './gerar-ordem-de-servico.component';

describe('GerarOrdemDeServicoComponent', () => {
  let component: GerarOrdemDeServicoComponent;
  let fixture: ComponentFixture<GerarOrdemDeServicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GerarOrdemDeServicoComponent]
    });
    fixture = TestBed.createComponent(GerarOrdemDeServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
