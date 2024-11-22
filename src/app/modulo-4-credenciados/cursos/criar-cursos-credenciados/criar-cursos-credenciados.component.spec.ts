import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarCursosCredenciadosComponent } from './criar-cursos-credenciados.component';

describe('CriarCursosCredenciadosComponent', () => {
  let component: CriarCursosCredenciadosComponent;
  let fixture: ComponentFixture<CriarCursosCredenciadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarCursosCredenciadosComponent]
    });
    fixture = TestBed.createComponent(CriarCursosCredenciadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
