import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarExamesFuncaoEspecificaComponent } from './criar-exames-funcao-especifica.component';

describe('CriarExamesFuncaoEspecificaComponent', () => {
  let component: CriarExamesFuncaoEspecificaComponent;
  let fixture: ComponentFixture<CriarExamesFuncaoEspecificaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarExamesFuncaoEspecificaComponent]
    });
    fixture = TestBed.createComponent(CriarExamesFuncaoEspecificaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
