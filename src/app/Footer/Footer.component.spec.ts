import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { EbayFooter } from './Footer.component';



describe('EbayFooter', () => {
  let component: EbayFooter;
  let fixture: ComponentFixture<EbayFooter>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({declarations: [EbayFooter]}).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EbayFooter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });
});