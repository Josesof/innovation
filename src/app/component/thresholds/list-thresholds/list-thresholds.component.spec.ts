import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListThresholdsComponent } from './list-thresholds.component';

describe('ListThresholdsComponent', () => {
  let component: ListThresholdsComponent;
  let fixture: ComponentFixture<ListThresholdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListThresholdsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListThresholdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
