import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePrinterComponent } from './table-printer.component';

describe('TablePrinterComponent', () => {
  let component: TablePrinterComponent;
  let fixture: ComponentFixture<TablePrinterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablePrinterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePrinterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
