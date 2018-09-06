import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoneGridComponent } from './grid.component';

describe('GridComponent', () => {
  let component: BoneGridComponent;
  let fixture: ComponentFixture<BoneGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoneGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoneGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
