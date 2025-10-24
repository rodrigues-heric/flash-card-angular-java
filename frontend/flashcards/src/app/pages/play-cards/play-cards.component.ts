import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ICard } from 'src/app/services/cards.service';

@Component({
  selector: 'app-play-cards',
  templateUrl: './play-cards.component.html',
  styleUrls: ['./play-cards.component.scss'],
})
export class PlayCardsComponent {
  private allCards: ICard[] = [];

  constructor(private router: Router) {
    this.initializeCards();
  }

  get cards(): ICard[] {
    return this.allCards;
  }

  set cards(value: ICard[]) {
    this.allCards = value;
  }

  private initializeCards(): void {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as { cards: ICard[] };
    this.allCards = state?.cards || [];
  }
}
