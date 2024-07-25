import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarExamesFuncaoDocComponent } from './consultar-exames-funcao-doc.component';

describe('ConsultarExamesFuncaoDocComponent', () => {
  let component: ConsultarExamesFuncaoDocComponent;
  let fixture: ComponentFixture<ConsultarExamesFuncaoDocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarExamesFuncaoDocComponent]
    });
    fixture = TestBed.createComponent(ConsultarExamesFuncaoDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
