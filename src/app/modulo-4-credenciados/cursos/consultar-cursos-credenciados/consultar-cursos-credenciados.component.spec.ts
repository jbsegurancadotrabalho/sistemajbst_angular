import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarCursosCredenciadosComponent } from './consultar-cursos-credenciados.component';

describe('ConsultarCursosCredenciadosComponent', () => {
  let component: ConsultarCursosCredenciadosComponent;
  let fixture: ComponentFixture<ConsultarCursosCredenciadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarCursosCredenciadosComponent]
    });
    fixture = TestBed.createComponent(ConsultarCursosCredenciadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
