import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  @Output() cardToRemove: EventEmitter<number> = new EventEmitter<number>();

  constructor(private router: Router, private cardsService: CardsService) {}

  public navigateToUpdateCard(card: ICard): void {
    this.router.navigate(['/update-card', card.id], {
      state: { cardData: card },
    });
  }

  public onRemoveCard(id: number): void {
    this.cardToRemove.emit(id);
  }
}
