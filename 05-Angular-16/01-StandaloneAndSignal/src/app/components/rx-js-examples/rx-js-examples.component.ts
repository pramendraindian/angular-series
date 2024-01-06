import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, Observable, mergeMap, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-rx-js-examples',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rx-js-examples.component.html',
  styleUrls: ['./rx-js-examples.component.scss']
})
export class RxJsExamplesComponent implements OnInit {
  parentSub: BehaviorSubject<number> = new BehaviorSubject(0);
  childSub: BehaviorSubject<number> = new BehaviorSubject(0);
  ngOnInit(): void {
    this.parentSub.pipe(
      tap(parentValue => this.childSub.next(parentValue * 2))
    ).subscribe(result => {
      console.warn(result);
      console.warn(this.childSub.getValue());

    });
  }

  send()
  {
    this.parentSub.next(100);
  }


}
