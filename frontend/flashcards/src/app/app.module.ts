import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { TitleComponent } from './components/title/title.component';
import { CirclePlusBigComponent } from './icons/circle-plus-big/circle-plus-big.component';
import { FolderOpenMediumComponent } from './icons/folder-open-medium/folder-open-medium.component';
import { CreationOptionDeckComponent } from './components/creation-option-deck/creation-option-deck.component';
import { CreateOptionCardComponent } from './components/creation-option-card/creation-option-card.component';
import { CardMediumComponent } from './icons/card-medium/card-medium.component';
import { CreateCardComponent } from './pages/create-card/create-card.component';
import { CreateDeckComponent } from './pages/create-deck/create-deck.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TitleComponent,
    CirclePlusBigComponent,
    FolderOpenMediumComponent,
    CreationOptionDeckComponent,
    CreateOptionCardComponent,
    CardMediumComponent,
    CreateCardComponent,
    CreateDeckComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
