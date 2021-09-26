import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from "axios";

@Injectable({
  providedIn: 'root'
})
export class HumbleBundlesService {

  constructor(private http: HttpClient) { }

  bundles = axios.request({
    method: 'GET',
    url: 'https://humble-bundles1.p.rapidapi.com/bundles',
  headers: {
    'x-rapidapi-host': 'humble-bundles1.p.rapidapi.com',
    'x-rapidapi-key': 'd05bde9eb7msh3a5ba3b8993f557p198255jsn9bf52abf185a'
  }
}).then(function (response) {
  //console.log(response.data);
  return response.data
}).catch(function (error) {
 //console.error(error);
 return error.data
});
}
