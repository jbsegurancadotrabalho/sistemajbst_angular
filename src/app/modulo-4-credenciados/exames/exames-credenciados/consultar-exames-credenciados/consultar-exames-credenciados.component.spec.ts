import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarExamesCredenciadosComponent } from './consultar-exames-credenciados.component';

describe('ConsultarExamesCredenciadosComponent', () => {
  let component: ConsultarExamesCredenciadosComponent;
  let fixture: ComponentFixture<ConsultarExamesCredenciadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarExamesCredenciadosComponent]
    });
    fixture = TestBed.createComponent(ConsultarExamesCredenciadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
