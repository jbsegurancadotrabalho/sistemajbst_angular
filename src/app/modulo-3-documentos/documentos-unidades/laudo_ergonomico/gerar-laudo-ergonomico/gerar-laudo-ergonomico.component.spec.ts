import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerarLaudoErgonomicoComponent } from './gerar-laudo-ergonomico.component';

describe('GerarLaudoErgonomicoComponent', () => {
  let component: GerarLaudoErgonomicoComponent;
  let fixture: ComponentFixture<GerarLaudoErgonomicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GerarLaudoErgonomicoComponent]
    });
    fixture = TestBed.createComponent(GerarLaudoErgonomicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
