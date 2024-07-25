import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarExamesGeralComponent } from './criar-exames-geral.component';

describe('CriarExamesGeralComponent', () => {
  let component: CriarExamesGeralComponent;
  let fixture: ComponentFixture<CriarExamesGeralComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarExamesGeralComponent]
    });
    fixture = TestBed.createComponent(CriarExamesGeralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
