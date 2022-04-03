import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EbayTopCard } from './TopCard.component';




describe('EbayTopCard', () => {
  let component: EbayTopCard;
  let fixture: ComponentFixture<EbayTopCard>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({declarations: [EbayTopCard]}).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EbayTopCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });
});