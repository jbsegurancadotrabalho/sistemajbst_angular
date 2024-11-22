import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAvaliacoesOcupacionaisComponent } from './editar-avaliacoes-ocupacionais.component';

describe('EditarAvaliacoesOcupacionaisComponent', () => {
  let component: EditarAvaliacoesOcupacionaisComponent;
  let fixture: ComponentFixture<EditarAvaliacoesOcupacionaisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarAvaliacoesOcupacionaisComponent]
    });
    fixture = TestBed.createComponent(EditarAvaliacoesOcupacionaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
