import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { POSTLISTComponent } from './postlist.component';

describe('POSTLISTComponent', () => {
  let component: POSTLISTComponent;
  let fixture: ComponentFixture<POSTLISTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ POSTLISTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(POSTLISTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
