import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarAvaliacaoFuncaodocComponent } from './criar-avaliacao-funcaodoc.component';

describe('CriarAvaliacaoFuncaodocComponent', () => {
  let component: CriarAvaliacaoFuncaodocComponent;
  let fixture: ComponentFixture<CriarAvaliacaoFuncaodocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarAvaliacaoFuncaodocComponent]
    });
    fixture = TestBed.createComponent(CriarAvaliacaoFuncaodocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
