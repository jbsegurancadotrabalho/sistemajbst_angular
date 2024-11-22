import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerarAnamneseComponent } from './gerar-anamnese.component';

describe('GerarAnamneseComponent', () => {
  let component: GerarAnamneseComponent;
  let fixture: ComponentFixture<GerarAnamneseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GerarAnamneseComponent]
    });
    fixture = TestBed.createComponent(GerarAnamneseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
