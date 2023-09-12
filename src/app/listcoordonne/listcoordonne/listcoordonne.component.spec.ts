import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcoordonneComponent } from './listcoordonne.component';

describe('ListcoordonneComponent', () => {
  let component: ListcoordonneComponent;
  let fixture: ComponentFixture<ListcoordonneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListcoordonneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListcoordonneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
