import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { POSTDETAILComponent } from './postdetail.component';

describe('POSTDETAILComponent', () => {
  let component: POSTDETAILComponent;
  let fixture: ComponentFixture<POSTDETAILComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ POSTDETAILComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(POSTDETAILComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
