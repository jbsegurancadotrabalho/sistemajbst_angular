import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerarLtcatComponent } from './gerar-ltcat.component';

describe('GerarLtcatComponent', () => {
  let component: GerarLtcatComponent;
  let fixture: ComponentFixture<GerarLtcatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GerarLtcatComponent]
    });
    fixture = TestBed.createComponent(GerarLtcatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
