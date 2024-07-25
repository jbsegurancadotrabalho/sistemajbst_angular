import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarUnidadeComponent } from './consultar-unidade.component';

describe('ConsultarUnidadeComponent', () => {
  let component: ConsultarUnidadeComponent;
  let fixture: ComponentFixture<ConsultarUnidadeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarUnidadeComponent]
    });
    fixture = TestBed.createComponent(ConsultarUnidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
