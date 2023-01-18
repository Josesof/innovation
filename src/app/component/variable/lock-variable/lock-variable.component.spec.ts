import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LockVariableComponent } from './lock-variable.component';

describe('LockVariableComponent', () => {
  let component: LockVariableComponent;
  let fixture: ComponentFixture<LockVariableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LockVariableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LockVariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
