import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarNivelDeSeveridadeRiscosComponent } from './criar-nivel-de-severidade-riscos.component';

describe('CriarNivelDeSeveridadeRiscosComponent', () => {
  let component: CriarNivelDeSeveridadeRiscosComponent;
  let fixture: ComponentFixture<CriarNivelDeSeveridadeRiscosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarNivelDeSeveridadeRiscosComponent]
    });
    fixture = TestBed.createComponent(CriarNivelDeSeveridadeRiscosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
