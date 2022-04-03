import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { EbaydefaultLayout } from './defaultLayout.component';




describe('EbaydefaultLayout', () => {
  let component: EbaydefaultLayout;
  let fixture: ComponentFixture<EbaydefaultLayout>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({declarations: [EbaydefaultLayout]}).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EbaydefaultLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });
});