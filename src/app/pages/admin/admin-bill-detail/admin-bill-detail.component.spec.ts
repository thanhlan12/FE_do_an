import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBillDetailComponent } from './admin-bill-detail.component';

describe('AdminBillDetailComponent', () => {
  let component: AdminBillDetailComponent;
  let fixture: ComponentFixture<AdminBillDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminBillDetailComponent]
    });
    fixture = TestBed.createComponent(AdminBillDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
