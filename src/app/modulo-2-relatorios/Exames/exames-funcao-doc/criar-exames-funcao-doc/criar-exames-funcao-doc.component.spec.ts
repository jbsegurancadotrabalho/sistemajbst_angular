import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarExamesFuncaoDocComponent } from './criar-exames-funcao-doc.component';

describe('CriarExamesFuncaoDocComponent', () => {
  let component: CriarExamesFuncaoDocComponent;
  let fixture: ComponentFixture<CriarExamesFuncaoDocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarExamesFuncaoDocComponent]
    });
    fixture = TestBed.createComponent(CriarExamesFuncaoDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
