import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { HumbleBundlesService } from 'src/app/services/humble-bundles.service';

@Component({
  selector: 'app-humble-bundles',
  templateUrl: './humble-bundles.component.html',
  styleUrls: ['./humble-bundles.component.scss']
})
export class HumbleBundlesComponent implements OnInit {

  constructor(public appComponent:AppComponent, public humbleBundle: HumbleBundlesService, private http:HttpClient) { 
    appComponent.gridColumns = 3 
  }

  HumbleBundles?: any;

  ngOnInit(): void {
    this.GetBundles();
  }

  GetBundles(){
    this.HumbleBundles = this.humbleBundle.bundles;
    //console.log(this.humbleBundle.bundles);
  }

}
