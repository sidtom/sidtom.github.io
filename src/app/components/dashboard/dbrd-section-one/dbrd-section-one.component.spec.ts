import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbrdSectionOneComponent } from './dbrd-section-one.component';

describe('DbrdSectionOneComponent', () => {
  let component: DbrdSectionOneComponent;
  let fixture: ComponentFixture<DbrdSectionOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbrdSectionOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbrdSectionOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
