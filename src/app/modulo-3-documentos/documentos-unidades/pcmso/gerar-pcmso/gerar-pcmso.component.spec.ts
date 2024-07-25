import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerarPcmsoComponent } from './gerar-pcmso.component';

describe('GerarPcmsoComponent', () => {
  let component: GerarPcmsoComponent;
  let fixture: ComponentFixture<GerarPcmsoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GerarPcmsoComponent]
    });
    fixture = TestBed.createComponent(GerarPcmsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
