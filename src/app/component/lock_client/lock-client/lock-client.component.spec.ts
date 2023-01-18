import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LockClientComponent } from './lock-client.component';

describe('LockClientComponent', () => {
  let component: LockClientComponent;
  let fixture: ComponentFixture<LockClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LockClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LockClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
