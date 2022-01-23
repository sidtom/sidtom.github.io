import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbrdSectionFiveComponent } from './dbrd-section-five.component';

describe('DbrdSectionFiveComponent', () => {
  let component: DbrdSectionFiveComponent;
  let fixture: ComponentFixture<DbrdSectionFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbrdSectionFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbrdSectionFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
