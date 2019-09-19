import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenpostComponent } from './genpost.component';

describe('GenpostComponent', () => {
  let component: GenpostComponent;
  let fixture: ComponentFixture<GenpostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenpostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
