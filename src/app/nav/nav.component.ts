import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  appTitle: string = 'Test app using Angular 7';
  currentUrl: string = '/';

  constructor(private router: Router) { 
    //this.router.events.subscribe((_: NavigationEnd) => {this.currentUrl = _.url; console.log(this.currentUrl);});
  
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    ).subscribe((e: NavigationEnd) => {
        this.currentUrl = e.url;       
    });
  }

  ngOnInit() {
  }

}
