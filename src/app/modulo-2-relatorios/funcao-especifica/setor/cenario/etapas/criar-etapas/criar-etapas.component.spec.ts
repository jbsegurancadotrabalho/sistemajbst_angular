import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarEtapasComponent } from './criar-etapas.component';

describe('CriarEtapasComponent', () => {
  let component: CriarEtapasComponent;
  let fixture: ComponentFixture<CriarEtapasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarEtapasComponent]
    });
    fixture = TestBed.createComponent(CriarEtapasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
