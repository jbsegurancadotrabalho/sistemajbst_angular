import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarMedidasDeControleComponent } from './criar-medidas-de-controle.component';

describe('CriarMedidasDeControleComponent', () => {
  let component: CriarMedidasDeControleComponent;
  let fixture: ComponentFixture<CriarMedidasDeControleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarMedidasDeControleComponent]
    });
    fixture = TestBed.createComponent(CriarMedidasDeControleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
