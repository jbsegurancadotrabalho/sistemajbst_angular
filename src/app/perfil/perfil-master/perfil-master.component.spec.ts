import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilMasterComponent } from './perfil-master.component';

describe('PerfilMasterComponent', () => {
  let component: PerfilMasterComponent;
  let fixture: ComponentFixture<PerfilMasterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerfilMasterComponent]
    });
    fixture = TestBed.createComponent(PerfilMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
