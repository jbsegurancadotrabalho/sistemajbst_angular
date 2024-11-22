import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarCredenciadosComponent } from './criar-credenciados.component';

describe('CriarCredenciadosComponent', () => {
  let component: CriarCredenciadosComponent;
  let fixture: ComponentFixture<CriarCredenciadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarCredenciadosComponent]
    });
    fixture = TestBed.createComponent(CriarCredenciadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
