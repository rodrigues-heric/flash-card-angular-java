import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ICard } from 'src/app/services/cards.service';

const ANIMATION_MS = 650;

@Component({
  selector: 'app-play-cards',
  templateUrl: './play-cards.component.html',
  styleUrls: ['./play-cards.component.scss'],
})
export class PlayCardsComponent {
  private allCards: ICard[] = [];
  private currentIndex: number = 1;
  private totalCards: number = 0;
  private isFlipped = false;

  constructor(private router: Router) {
    this.initializeCards();
  }

  get flipped(): boolean {
    return this.isFlipped;
  }

  set flipped(value: boolean) {
    this.isFlipped = value;
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

  private async resetCardFlip(): Promise<void> {
    if (this.isFlipped) {
      this.isFlipped = false;
      await new Promise((resolve) => setTimeout(resolve, ANIMATION_MS));
    }
  }

  private navigateToHome(): void {
    this.router.navigate(['/']);
  }

  private async previousCard(): Promise<void> {
    await this.resetCardFlip();
    this.currentCardIndex = this.currentCardIndex - 1;
  }

  public toggleFlip(): void {
    this.isFlipped = !this.isFlipped;
  }

  public previous(): void {
    if (this.currentIndex > 1) this.previousCard();
    else this.navigateToHome();
  }

  public async nextCard(): Promise<void> {
    if (this.currentIndex < this.totalCards) {
      await this.resetCardFlip();
      this.currentIndex++;
    } else {
      this.navigateToHome();
    }
  }
}
