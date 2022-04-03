import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { EbayTopNavBar } from './TopNavBar.component';




describe('EbayTopNavBar', () => {
  let component: EbayTopNavBar;
  let fixture: ComponentFixture<EbayTopNavBar>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({declarations: [EbayTopNavBar]}).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EbayTopNavBar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });
});