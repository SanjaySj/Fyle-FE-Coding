import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BanksComponent } from './components/banks/banks.component';
import { FavouriteBanksComponent } from './components/favourite-banks/favourite-banks.component';

const routes: Routes = [
  {
    path: 'banks',
    component: BanksComponent
  }, {
    path: 'favourite-banks',
    component: FavouriteBanksComponent
  }, {
    path: '',
    redirectTo: 'banks',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

export const routedComponents = [
  FavouriteBanksComponent,
  BanksComponent,
];
