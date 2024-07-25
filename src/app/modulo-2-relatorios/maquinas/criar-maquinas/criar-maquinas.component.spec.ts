import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarMaquinasComponent } from './criar-maquinas.component';

describe('CriarMaquinasComponent', () => {
  let component: CriarMaquinasComponent;
  let fixture: ComponentFixture<CriarMaquinasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarMaquinasComponent]
    });
    fixture = TestBed.createComponent(CriarMaquinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
