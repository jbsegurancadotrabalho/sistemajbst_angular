import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarChamadosClientesComponent } from './criar-chamados-clientes.component';

describe('CriarChamadosClientesComponent', () => {
  let component: CriarChamadosClientesComponent;
  let fixture: ComponentFixture<CriarChamadosClientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarChamadosClientesComponent]
    });
    fixture = TestBed.createComponent(CriarChamadosClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
