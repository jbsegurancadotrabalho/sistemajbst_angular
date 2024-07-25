import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarEspecializacaoComponent } from './editar-especializacao.component';

describe('EditarEspecializacaoComponent', () => {
  let component: EditarEspecializacaoComponent;
  let fixture: ComponentFixture<EditarEspecializacaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarEspecializacaoComponent]
    });
    fixture = TestBed.createComponent(EditarEspecializacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
