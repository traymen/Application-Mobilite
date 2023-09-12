import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordonneComponent } from './coordonne.component';

describe('CoordonneComponent', () => {
  let component: CoordonneComponent;
  let fixture: ComponentFixture<CoordonneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordonneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoordonneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
