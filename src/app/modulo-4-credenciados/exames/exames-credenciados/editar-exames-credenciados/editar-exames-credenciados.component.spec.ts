import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarExamesCredenciadosComponent } from './editar-exames-credenciados.component';

describe('EditarExamesCredenciadosComponent', () => {
  let component: EditarExamesCredenciadosComponent;
  let fixture: ComponentFixture<EditarExamesCredenciadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarExamesCredenciadosComponent]
    });
    fixture = TestBed.createComponent(EditarExamesCredenciadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
