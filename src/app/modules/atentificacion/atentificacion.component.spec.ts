import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtentificacionComponent } from './atentificacion.component';

describe('AtentificacionComponent', () => {
  let component: AtentificacionComponent;
  let fixture: ComponentFixture<AtentificacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtentificacionComponent]
    });
    fixture = TestBed.createComponent(AtentificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
