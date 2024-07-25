import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarExamesGeralComponent } from './editar-exames-geral.component';

describe('EditarExamesGeralComponent', () => {
  let component: EditarExamesGeralComponent;
  let fixture: ComponentFixture<EditarExamesGeralComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarExamesGeralComponent]
    });
    fixture = TestBed.createComponent(EditarExamesGeralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
