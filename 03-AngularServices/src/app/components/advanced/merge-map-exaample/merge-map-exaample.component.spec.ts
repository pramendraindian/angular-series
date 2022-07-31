import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeMapExaampleComponent } from './merge-map-exaample.component';

describe('MergeMapExaampleComponent', () => {
  let component: MergeMapExaampleComponent;
  let fixture: ComponentFixture<MergeMapExaampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MergeMapExaampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MergeMapExaampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
