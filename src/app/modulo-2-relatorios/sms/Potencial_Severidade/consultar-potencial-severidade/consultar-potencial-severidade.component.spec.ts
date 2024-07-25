import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarPotencialSeveridadeComponent } from './consultar-potencial-severidade.component';

describe('ConsultarPotencialSeveridadeComponent', () => {
  let component: ConsultarPotencialSeveridadeComponent;
  let fixture: ComponentFixture<ConsultarPotencialSeveridadeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarPotencialSeveridadeComponent]
    });
    fixture = TestBed.createComponent(ConsultarPotencialSeveridadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
