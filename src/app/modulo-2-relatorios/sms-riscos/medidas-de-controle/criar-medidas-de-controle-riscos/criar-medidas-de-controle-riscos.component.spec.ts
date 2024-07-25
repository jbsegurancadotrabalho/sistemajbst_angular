import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarMedidasDeControleRiscosComponent } from './criar-medidas-de-controle-riscos.component';

describe('CriarMedidasDeControleRiscosComponent', () => {
  let component: CriarMedidasDeControleRiscosComponent;
  let fixture: ComponentFixture<CriarMedidasDeControleRiscosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarMedidasDeControleRiscosComponent]
    });
    fixture = TestBed.createComponent(CriarMedidasDeControleRiscosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
