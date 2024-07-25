import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerarOrdemDeServicoFreeComponent } from './gerar-ordem-de-servico-free.component';

describe('GerarOrdemDeServicoFreeComponent', () => {
  let component: GerarOrdemDeServicoFreeComponent;
  let fixture: ComponentFixture<GerarOrdemDeServicoFreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GerarOrdemDeServicoFreeComponent]
    });
    fixture = TestBed.createComponent(GerarOrdemDeServicoFreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
