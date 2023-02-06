import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexViewComponent } from './index-view.component';

describe('IndexViewComponent', () => {
  let component: IndexViewComponent;
  let fixture: ComponentFixture<IndexViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
