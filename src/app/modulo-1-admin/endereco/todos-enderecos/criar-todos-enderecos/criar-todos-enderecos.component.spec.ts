import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarTodosEnderecosComponent } from './criar-todos-enderecos.component';

describe('CriarTodosEnderecosComponent', () => {
  let component: CriarTodosEnderecosComponent;
  let fixture: ComponentFixture<CriarTodosEnderecosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarTodosEnderecosComponent]
    });
    fixture = TestBed.createComponent(CriarTodosEnderecosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
