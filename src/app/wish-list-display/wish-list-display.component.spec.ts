import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishListDisplayComponent } from './wish-list-display.component';

describe('WishListDisplayComponent', () => {
  let component: WishListDisplayComponent;
  let fixture: ComponentFixture<WishListDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WishListDisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WishListDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
