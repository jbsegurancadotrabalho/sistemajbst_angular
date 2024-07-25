import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarPotencialSeveridadeComponent } from './criar-potencial-severidade.component';

describe('CriarPotencialSeveridadeComponent', () => {
  let component: CriarPotencialSeveridadeComponent;
  let fixture: ComponentFixture<CriarPotencialSeveridadeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarPotencialSeveridadeComponent]
    });
    fixture = TestBed.createComponent(CriarPotencialSeveridadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
