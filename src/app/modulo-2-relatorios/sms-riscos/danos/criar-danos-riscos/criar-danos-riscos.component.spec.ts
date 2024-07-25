import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarDanosRiscosComponent } from './criar-danos-riscos.component';

describe('CriarDanosRiscosComponent', () => {
  let component: CriarDanosRiscosComponent;
  let fixture: ComponentFixture<CriarDanosRiscosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarDanosRiscosComponent]
    });
    fixture = TestBed.createComponent(CriarDanosRiscosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
