import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumbleBundlesComponent } from './humble-bundles.component';

describe('HumbleBundlesComponent', () => {
  let component: HumbleBundlesComponent;
  let fixture: ComponentFixture<HumbleBundlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HumbleBundlesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HumbleBundlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
