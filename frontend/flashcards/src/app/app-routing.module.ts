import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CreateCardComponent } from './pages/create-card/create-card.component';
import { CreateDeckComponent } from './pages/create-deck/create-deck.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'create-card', component: CreateCardComponent },
  { path: 'create-deck', component: CreateDeckComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
