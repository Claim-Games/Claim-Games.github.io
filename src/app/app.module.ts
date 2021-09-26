import {NgModule} from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { SidebarModule } from 'ng-sidebar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule} from '@angular/material/card';
import { FreeGamesComponent } from './components/free-games/free-games.component'
import { MatSliderModule } from '@angular/material/slider'
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CheapSharkComponent } from './components/cheap-shark/cheap-shark.component';
import { SocialLinksComponent } from './components/social-links/social-links.component';
import { HumbleBundlesComponent } from './components/humble-bundles/humble-bundles.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FreeGamesComponent,
    CheapSharkComponent,
    SocialLinksComponent,
    HumbleBundlesComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    SidebarModule.forRoot(),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatSliderModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [FreeGamesComponent,
    CheapSharkComponent,
    SocialLinksComponent,
    MenuComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
