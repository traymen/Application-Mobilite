import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccesscoordonneComponent } from './successcoordonne.component';

describe('SuccesscoordonneComponent', () => {
  let component: SuccesscoordonneComponent;
  let fixture: ComponentFixture<SuccesscoordonneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccesscoordonneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccesscoordonneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
