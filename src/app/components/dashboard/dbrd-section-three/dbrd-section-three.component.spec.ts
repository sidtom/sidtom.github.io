import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbrdSectionThreeComponent } from './dbrd-section-three.component';

describe('DbrdSectionThreeComponent', () => {
  let component: DbrdSectionThreeComponent;
  let fixture: ComponentFixture<DbrdSectionThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbrdSectionThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbrdSectionThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
