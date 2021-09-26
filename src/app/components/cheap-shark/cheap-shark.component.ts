import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { AxiosResponse } from 'axios';
import { AppComponent } from 'src/app/app.component';
import { CheapSharkService } from 'src/app/services/cheap-shark.service';

@Component({
  selector: 'app-cheap-shark',
  templateUrl: './cheap-shark.component.html',
  styleUrls: ['./cheap-shark.component.scss']
})
export class CheapSharkComponent implements OnInit {

  constructor(public appComponent:AppComponent, private http:HttpClient, private cheapSharkService:CheapSharkService) { 
    appComponent.gridColumns = 4
  }

  cheapSharkGames?: any;
  @Input() search?: string;

  
  ngOnInit(): void {
    this.cheapSharkGames = this.UpdateGames(this.search);
  }

  ngOnChanges(){
    this.cheapSharkGames = this.UpdateGames(this.search);
    console.log(this.cheapSharkGames);
  }

  UpdateGames(game = this.search): Promise<AxiosResponse<any>>{
    this.search = game;
    //console.log(this.cheapSharkGames);
    return this.cheapSharkService.FindDealForGame(game);
  }
}