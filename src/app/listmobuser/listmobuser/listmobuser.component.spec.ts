import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListmobuserComponent } from './listmobuser.component';

describe('ListmobuserComponent', () => {
  let component: ListmobuserComponent;
  let fixture: ComponentFixture<ListmobuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListmobuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListmobuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
