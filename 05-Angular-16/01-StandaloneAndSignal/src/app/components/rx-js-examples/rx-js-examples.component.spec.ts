import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxJsExamplesComponent } from './rx-js-examples.component';

describe('RxJsExamplesComponent', () => {
  let component: RxJsExamplesComponent;
  let fixture: ComponentFixture<RxJsExamplesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RxJsExamplesComponent]
    });
    fixture = TestBed.createComponent(RxJsExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
