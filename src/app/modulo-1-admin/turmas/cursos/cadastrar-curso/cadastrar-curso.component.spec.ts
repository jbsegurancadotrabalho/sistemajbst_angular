import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarCursoComponent } from './cadastrar-curso.component';

describe('CadastrarCursoComponent', () => {
  let component: CadastrarCursoComponent;
  let fixture: ComponentFixture<CadastrarCursoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastrarCursoComponent]
    });
    fixture = TestBed.createComponent(CadastrarCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
