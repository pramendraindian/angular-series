import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BrowserEvents } from '../enums/browser.events.enum';
@Injectable({
  providedIn: 'root'
})
export class BrowserService {
  public isToNavigateWithoutWarning=false;
  public browserActions:BehaviorSubject<BrowserEvents>=new BehaviorSubject<BrowserEvents>(BrowserEvents.Load);
  constructor() { }
  publishBrowserEvents(event:BrowserEvents)
  {
    this.browserActions.next(event);
  }
}
