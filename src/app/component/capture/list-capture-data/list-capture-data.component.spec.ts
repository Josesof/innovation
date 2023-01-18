import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCaptureDataComponent } from './list-capture-data.component';

describe('ListCaptureDataComponent', () => {
  let component: ListCaptureDataComponent;
  let fixture: ComponentFixture<ListCaptureDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCaptureDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCaptureDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
