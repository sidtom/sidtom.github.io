import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbrdSectionSixComponent } from './dbrd-section-six.component';

describe('DbrdSectionSixComponent', () => {
  let component: DbrdSectionSixComponent;
  let fixture: ComponentFixture<DbrdSectionSixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbrdSectionSixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbrdSectionSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
