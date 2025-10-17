import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ICard } from 'src/app/services/cards.service';

@Component({
  selector: 'app-home-cards',
  templateUrl: './home-cards.component.html',
  styleUrls: ['./home-cards.component.scss'],
})
export class HomeCardsComponent {
  @Input() hasCards: boolean = false;
  @Input() cards: ICard[] = [];

  constructor(private router: Router) {}

  public navigateToUpdateCard(card: ICard): void {
    this.router.navigate(['/update-card', card.id], {
      state: { cardData: card },
    });
  }
}
