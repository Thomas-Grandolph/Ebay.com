import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';


import { EbaylowerCard } from './lowerCard.component';

describe('EbaylowerCard', () => {
  let component: EbaylowerCard;
  let fixture: ComponentFixture<EbaylowerCard>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({declarations: [EbaylowerCard]}).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EbaylowerCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });
});