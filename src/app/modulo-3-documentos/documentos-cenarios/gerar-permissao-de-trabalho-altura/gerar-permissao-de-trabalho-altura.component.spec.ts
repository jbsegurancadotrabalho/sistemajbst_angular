import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerarPermissaoDeTrabalhoAlturaComponent } from './gerar-permissao-de-trabalho-altura.component';

describe('GerarPermissaoDeTrabalhoAlturaComponent', () => {
  let component: GerarPermissaoDeTrabalhoAlturaComponent;
  let fixture: ComponentFixture<GerarPermissaoDeTrabalhoAlturaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GerarPermissaoDeTrabalhoAlturaComponent]
    });
    fixture = TestBed.createComponent(GerarPermissaoDeTrabalhoAlturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
