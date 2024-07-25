import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarNivelSeveridadeComponent } from './criar-nivel-severidade.component';

describe('CriarNivelSeveridadeComponent', () => {
  let component: CriarNivelSeveridadeComponent;
  let fixture: ComponentFixture<CriarNivelSeveridadeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarNivelSeveridadeComponent]
    });
    fixture = TestBed.createComponent(CriarNivelSeveridadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
