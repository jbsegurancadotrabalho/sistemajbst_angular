import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerarPermissaoDeTrabalhoComponent } from './gerar-permissao-de-trabalho.component';

describe('GerarPermissaoDeTrabalhoComponent', () => {
  let component: GerarPermissaoDeTrabalhoComponent;
  let fixture: ComponentFixture<GerarPermissaoDeTrabalhoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GerarPermissaoDeTrabalhoComponent]
    });
    fixture = TestBed.createComponent(GerarPermissaoDeTrabalhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
