import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarRiscosFuncaoEspecificaComponent } from './criar-riscos-funcao-especifica.component';

describe('CriarRiscosFuncaoEspecificaComponent', () => {
  let component: CriarRiscosFuncaoEspecificaComponent;
  let fixture: ComponentFixture<CriarRiscosFuncaoEspecificaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarRiscosFuncaoEspecificaComponent]
    });
    fixture = TestBed.createComponent(CriarRiscosFuncaoEspecificaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
