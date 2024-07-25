import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadepresencaComponent } from './listadepresenca.component';

describe('ListadepresencaComponent', () => {
  let component: ListadepresencaComponent;
  let fixture: ComponentFixture<ListadepresencaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListadepresencaComponent]
    });
    fixture = TestBed.createComponent(ListadepresencaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
