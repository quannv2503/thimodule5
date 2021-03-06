import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookdetailComponent } from './bookdetail.component';

describe('ProductdetailComponent', () => {
  let component: BookdetailComponent;
  let fixture: ComponentFixture<BookdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
