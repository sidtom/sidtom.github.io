import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbrdSectionTwoComponent } from './dbrd-section-two.component';

describe('DbrdSectionTwoComponent', () => {
  let component: DbrdSectionTwoComponent;
  let fixture: ComponentFixture<DbrdSectionTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbrdSectionTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbrdSectionTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
