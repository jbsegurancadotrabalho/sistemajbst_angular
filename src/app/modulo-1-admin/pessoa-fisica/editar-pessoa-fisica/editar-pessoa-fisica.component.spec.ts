import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPessoaFisicaComponent } from './editar-pessoa-fisica.component';

describe('EditarPessoaFisicaComponent', () => {
  let component: EditarPessoaFisicaComponent;
  let fixture: ComponentFixture<EditarPessoaFisicaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarPessoaFisicaComponent]
    });
    fixture = TestBed.createComponent(EditarPessoaFisicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
