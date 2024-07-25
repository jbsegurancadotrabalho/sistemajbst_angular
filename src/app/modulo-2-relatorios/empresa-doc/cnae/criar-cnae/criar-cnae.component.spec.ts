import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarCnaeComponent } from './criar-cnae.component';

describe('CriarCnaeComponent', () => {
  let component: CriarCnaeComponent;
  let fixture: ComponentFixture<CriarCnaeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarCnaeComponent]
    });
    fixture = TestBed.createComponent(CriarCnaeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
