import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CardsService, ICard } from 'src/app/services/cards.service';

@Component({
  selector: 'app-home-cards',
  templateUrl: './home-cards.component.html',
  styleUrls: ['./home-cards.component.scss'],
})
export class HomeCardsComponent {
  @Input() hasCards: boolean = false;
  @Input() cards: ICard[] = [];
  @Input() isRemoveOption: boolean = false;

  constructor(private router: Router, private cardsService: CardsService) {}

  public navigateToUpdateCard(card: ICard): void {
    this.router.navigate(['/update-card', card.id], {
      state: { cardData: card },
    });
  }

  public onRemoveCard(id: number): void {
    this.cardsService.deleteCard(id).subscribe({
      next: () => {
        this.cards = this.cards.filter((card) => card.id !== id);
      },
      error: (err) => {
        console.error('Error deleting card:', err);
      },
    });
  }
}
