import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout'
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Claim-Games';
  public gridColumns = 4;
  router: string;
 @ViewChild(MatSidenav)
 sidenav!: MatSidenav;

  constructor(private observer: BreakpointObserver, private _router: Router){
    this.router = _router.url;
  }
  
  ngAfterViewInit(){
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if(res.matches){
        this.sidenav.mode = 'over';
        this.sidenav.close();
      }else{
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }
  toggle(sidenav: any) {
    sidenav.toggle();
  }
  
}
