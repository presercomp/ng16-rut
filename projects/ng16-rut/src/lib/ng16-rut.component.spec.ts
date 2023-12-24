import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng16RutComponent } from './ng16-rut.component';

describe('Ng16RutComponent', () => {
  let component: Ng16RutComponent;
  let fixture: ComponentFixture<Ng16RutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ng16RutComponent]
    });
    fixture = TestBed.createComponent(Ng16RutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
