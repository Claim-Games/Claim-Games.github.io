import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheapSharkComponent } from './components/cheap-shark/cheap-shark.component';
import { FreeGamesComponent } from './components/free-games/free-games.component';
import { HumbleBundlesComponent } from './components/humble-bundles/humble-bundles.component';

const routes: Routes = [
  { path: 'freeGames', component: FreeGamesComponent },
  { path: '', redirectTo: 'freeGames', pathMatch: 'full'},
  { path: 'GameDeals', component: CheapSharkComponent},
  { path: 'HumbleBundles', component: HumbleBundlesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
