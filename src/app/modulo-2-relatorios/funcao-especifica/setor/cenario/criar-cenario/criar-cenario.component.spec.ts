import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarCenarioComponent } from './criar-cenario.component';

describe('CriarCenarioComponent', () => {
  let component: CriarCenarioComponent;
  let fixture: ComponentFixture<CriarCenarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarCenarioComponent]
    });
    fixture = TestBed.createComponent(CriarCenarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
