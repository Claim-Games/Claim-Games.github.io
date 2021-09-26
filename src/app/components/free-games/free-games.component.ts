import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { AppComponent } from 'src/app/app.component';
import { GamerpowerService } from 'src/app/services/gamerpower.service';


@Component({
  selector: 'app-free-games',
  templateUrl: './free-games.component.html',
  styleUrls: ['./free-games.component.scss']
})
export class FreeGamesComponent implements OnInit {
  constructor(public appComponent:AppComponent, public gamePowerService: GamerpowerService, private http:HttpClient) { 
    appComponent.gridColumns = 3 
  }

  GamerPowerGames?: any;

  ngOnInit(): void {
    this.UpdateGames();
  }

  UpdateGames(){
    this.GamerPowerGames = this.gamePowerService.getListOfGames;
    console.log(this.gamePowerService.getListOfGames);
  }

}
