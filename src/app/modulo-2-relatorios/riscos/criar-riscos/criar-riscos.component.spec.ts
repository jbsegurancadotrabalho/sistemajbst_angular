import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarRiscosComponent } from './criar-riscos.component';

describe('CriarRiscosComponent', () => {
  let component: CriarRiscosComponent;
  let fixture: ComponentFixture<CriarRiscosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarRiscosComponent]
    });
    fixture = TestBed.createComponent(CriarRiscosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
