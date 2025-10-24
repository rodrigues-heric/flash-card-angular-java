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
  private currentIndex: number = 1;
  private totalCards: number = 0;

  constructor(private router: Router) {
    this.initializeCards();
  }

  get cards(): ICard[] {
    return this.allCards;
  }

  set cards(value: ICard[]) {
    this.allCards = value;
  }

  get currentCardIndex(): number {
    return this.currentIndex;
  }

  set currentCardIndex(value: number) {
    this.currentIndex = value;
  }

  get numberOfCards(): number {
    return this.totalCards;
  }

  set numberOfCards(value: number) {
    this.totalCards = value;
  }

  get progressPercentage(): number {
    return (this.currentIndex / this.totalCards) * 100;
  }

  private initializeCards(): void {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as { cards: ICard[] };
    this.allCards = state?.cards || [];
    this.totalCards = this.allCards.length;
  }

  public incIndex(): void {
    if (this.currentIndex < this.totalCards) {
      this.currentIndex++;
    }
  }
}
