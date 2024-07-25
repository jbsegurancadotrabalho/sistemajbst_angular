import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarDanosComponent } from './criar-danos.component';

describe('CriarDanosComponent', () => {
  let component: CriarDanosComponent;
  let fixture: ComponentFixture<CriarDanosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarDanosComponent]
    });
    fixture = TestBed.createComponent(CriarDanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
