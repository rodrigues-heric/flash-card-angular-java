import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
import { CrossBigComponent } from './icons/cross-big/cross-big.component';
import { CheckBigComponent } from './icons/check-big/check-big.component';
import { PlusBigComponent } from './icons/plus-big/plus-big.component';
import { EqualsBigComponent } from './icons/equals-big/equals-big.component';
import { HomeInfoComponent } from './components/home-info/home-info.component';
import { HomeDecksComponent } from './components/home-decks/home-decks.component';
import { HomeCardsComponent } from './components/home-cards/home-cards.component';
import { CircleArrowRightSmallComponent } from './icons/circle-arrow-right-small/circle-arrow-right-small.component';
import { PencilSmallComponent } from './icons/pencil-small/pencil-small.component';

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
    CrossBigComponent,
    CheckBigComponent,
    PlusBigComponent,
    EqualsBigComponent,
    HomeInfoComponent,
    HomeDecksComponent,
    HomeCardsComponent,
    CircleArrowRightSmallComponent,
    PencilSmallComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
