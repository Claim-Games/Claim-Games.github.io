import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from "axios";

@Injectable({
  providedIn: 'root'
})

export class GamerpowerService {

  constructor(private http: HttpClient) { }

  getListOfGames = axios.request({
      method: 'GET',
      url: 'https://gamerpower.p.rapidapi.com/api/giveaways?platform=pc&sort-by=popularity&type=game',
      headers: {
        'x-rapidapi-host': 'gamerpower.p.rapidapi.com',
        'x-rapidapi-key': 'd05bde9eb7msh3a5ba3b8993f557p198255jsn9bf52abf185a'
      }}).then(function (response) {
       //console.log(response.data);
       return response.data
    }).catch(function (error) {
      //console.error(error);
      return error.data
    });
  }

