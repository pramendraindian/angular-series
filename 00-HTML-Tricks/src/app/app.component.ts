import { Component, OnInit } from '@angular/core';
import { BrowserEvents } from './enums/browser.events.enum';
import { BrowserService } from './services/browser.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ERPSystem';
  isClosing=false;
  constructor(private browserService:BrowserService){

  }
  ngOnInit(): void {
    console.warn('on init');
    this.browserService.isToNavigateWithoutWarning=false;
    this.subscribeToBrowserEvents();
  }
  subscribeToBrowserEvents()
  {
    this.browserService.browserActions.subscribe(
      event=>{
        if(event===BrowserEvents.BeforeUnload)
        {
            sessionStorage.setItem('before unload','app component '+this.title);
        }else if(event===BrowserEvents.Unload){
          sessionStorage.setItem('unload','app component '+this.title);
        }
      }
    );
  }
  navigateAway(showWarning:boolean){
    this.browserService.isToNavigateWithoutWarning=showWarning;
    window.location.href = "https://google.com"

  }
  
}
