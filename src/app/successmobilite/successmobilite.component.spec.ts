import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessmobiliteComponent } from './successmobilite.component';

describe('SuccessmobiliteComponent', () => {
  let component: SuccessmobiliteComponent;
  let fixture: ComponentFixture<SuccessmobiliteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessmobiliteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccessmobiliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
