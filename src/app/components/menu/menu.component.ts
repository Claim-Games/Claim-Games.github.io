import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { CheapSharkComponent } from '../cheap-shark/cheap-shark.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public static menuComponent:MenuComponent
  constructor(public appComponent: AppComponent ,public  _router: Router, public cheapSharkComponent:CheapSharkComponent) { }
  filter = "";

  ngOnInit(): void {
  }

  public findGames(){
    this.cheapSharkComponent.UpdateGames(this.filter);
  }

  onClick(){
    this.findGames();
    this.refreshComponent();
  }

  refreshComponent(){
    this.cheapSharkComponent.ngOnChanges();
 }
}
