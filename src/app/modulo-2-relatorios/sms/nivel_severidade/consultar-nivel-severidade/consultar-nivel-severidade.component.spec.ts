import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarNivelSeveridadeComponent } from './consultar-nivel-severidade.component';

describe('ConsultarNivelSeveridadeComponent', () => {
  let component: ConsultarNivelSeveridadeComponent;
  let fixture: ComponentFixture<ConsultarNivelSeveridadeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarNivelSeveridadeComponent]
    });
    fixture = TestBed.createComponent(ConsultarNivelSeveridadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
