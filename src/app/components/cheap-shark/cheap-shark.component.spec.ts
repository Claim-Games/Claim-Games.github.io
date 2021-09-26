import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheapSharkComponent } from './cheap-shark.component';

describe('CheapSharkComponent', () => {
  let component: CheapSharkComponent;
  let fixture: ComponentFixture<CheapSharkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheapSharkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheapSharkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
