import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarExamesFuncaoDocComponent } from './editar-exames-funcao-doc.component';

describe('EditarExamesFuncaoDocComponent', () => {
  let component: EditarExamesFuncaoDocComponent;
  let fixture: ComponentFixture<EditarExamesFuncaoDocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarExamesFuncaoDocComponent]
    });
    fixture = TestBed.createComponent(EditarExamesFuncaoDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
