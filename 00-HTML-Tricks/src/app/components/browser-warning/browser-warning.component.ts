import { Component, HostListener, Input, OnInit } from '@angular/core';
import { BrowserEvents } from 'src/app/enums/browser.events.enum';
import { BrowserService } from 'src/app/services/browser.service';

@Component({
  selector: 'app-browser-warning',
  templateUrl: './browser-warning.component.html',
  styleUrls: ['./browser-warning.component.css']
})
export class BrowserWarningComponent implements OnInit {
  @HostListener('window:unload', ['$event'])
  unloadHandler(event:any) {
    this.browserService.publishBrowserEvents(BrowserEvents.Unload);
  }
  
  @HostListener('window:beforeunload', ['$event'])
  beforeUnloadHander(event: any) {
    this.browserService.publishBrowserEvents(BrowserEvents.BeforeUnload);
    console.log(`Leaving without warning=> ${this.browserService.isToNavigateWithoutWarning}`);
    if (this.browserService.isToNavigateWithoutWarning) // While window.close remove leaving alerts
    {
      window.removeEventListener('beforeunload', this.beforeUnloadHander, false);
      window.onbeforeunload = null;
      return true; // no browser alert
    }
    return false;// means broeser alert
  }
 
  constructor(private browserService:BrowserService) { 

  }

  ngOnInit(): void {
  }

}
