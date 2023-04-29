import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Punto5ListaComponent } from './punto5-lista.component';

describe('Punto5ListaComponent', () => {
  let component: Punto5ListaComponent;
  let fixture: ComponentFixture<Punto5ListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Punto5ListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Punto5ListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
