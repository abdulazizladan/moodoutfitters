import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WholesaleComponent } from './wholesale.component';

describe('WholesaleComponent', () => {
  let component: WholesaleComponent;
  let fixture: ComponentFixture<WholesaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WholesaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WholesaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
