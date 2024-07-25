import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarAnaliseDePosturaComponent } from './criar-analise-de-postura.component';

describe('CriarAnaliseDePosturaComponent', () => {
  let component: CriarAnaliseDePosturaComponent;
  let fixture: ComponentFixture<CriarAnaliseDePosturaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarAnaliseDePosturaComponent]
    });
    fixture = TestBed.createComponent(CriarAnaliseDePosturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
