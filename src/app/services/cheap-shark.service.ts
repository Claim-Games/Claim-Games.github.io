import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios, { AxiosResponse } from "axios";

@Injectable({
  providedIn: 'root'
})
export class CheapSharkService {

  constructor(private http: HttpClient) { }

  async FindDealForGame(game:any):Promise<AxiosResponse<any>>{
    return await axios.request({
      method: 'GET',
      url: 'https://cheapshark-game-deals.p.rapidapi.com/deals',
      params: {
        storeID: '1,2,3',
        metacritic: '0',
        onSale: '0',
        pageNumber: '0',
        upperPrice: '50',
        exact: '0',
        pageSize: '60',
        AAA: '0',
        sortBy: 'Deal Rating',
        steamworks: '0',
        output: 'json',
        desc: '0',
        title: game,
        steamRating: '0',
        lowerPrice: '0'
      },
      headers: {
        'x-rapidapi-host': 'cheapshark-game-deals.p.rapidapi.com',
        'x-rapidapi-key': 'd05bde9eb7msh3a5ba3b8993f557p198255jsn9bf52abf185a'
      }
    }).then(function (response) {
      //console.log(response.data);
      return response.data;
    }).catch(function (error) {
      //console.error(error);
      return error.data;
    });
  }
  
}
