import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcatMapExampleComponent } from './concat-map-example.component';

describe('ConcatMapExampleComponent', () => {
  let component: ConcatMapExampleComponent;
  let fixture: ComponentFixture<ConcatMapExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcatMapExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcatMapExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
