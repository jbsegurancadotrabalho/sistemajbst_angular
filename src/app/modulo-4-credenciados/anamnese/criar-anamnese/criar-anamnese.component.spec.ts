import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarAnamneseComponent } from './criar-anamnese.component';

describe('CriarAnamneseComponent', () => {
  let component: CriarAnamneseComponent;
  let fixture: ComponentFixture<CriarAnamneseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarAnamneseComponent]
    });
    fixture = TestBed.createComponent(CriarAnamneseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
