import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarExamesCredenciadosComponent } from './criar-exames-credenciados.component';

describe('CriarExamesCredenciadosComponent', () => {
  let component: CriarExamesCredenciadosComponent;
  let fixture: ComponentFixture<CriarExamesCredenciadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarExamesCredenciadosComponent]
    });
    fixture = TestBed.createComponent(CriarExamesCredenciadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
