import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbrdSectionFourComponent } from './dbrd-section-four.component';

describe('DbrdSectionFourComponent', () => {
  let component: DbrdSectionFourComponent;
  let fixture: ComponentFixture<DbrdSectionFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbrdSectionFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbrdSectionFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
