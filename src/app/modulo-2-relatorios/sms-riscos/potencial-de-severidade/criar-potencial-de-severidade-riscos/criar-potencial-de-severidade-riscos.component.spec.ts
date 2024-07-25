import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarPotencialDeSeveridadeRiscosComponent } from './criar-potencial-de-severidade-riscos.component';

describe('CriarPotencialDeSeveridadeRiscosComponent', () => {
  let component: CriarPotencialDeSeveridadeRiscosComponent;
  let fixture: ComponentFixture<CriarPotencialDeSeveridadeRiscosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarPotencialDeSeveridadeRiscosComponent]
    });
    fixture = TestBed.createComponent(CriarPotencialDeSeveridadeRiscosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
