import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarNivelSeveridadeComponent } from './editar-nivel-severidade.component';

describe('EditarNivelSeveridadeComponent', () => {
  let component: EditarNivelSeveridadeComponent;
  let fixture: ComponentFixture<EditarNivelSeveridadeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarNivelSeveridadeComponent]
    });
    fixture = TestBed.createComponent(EditarNivelSeveridadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
