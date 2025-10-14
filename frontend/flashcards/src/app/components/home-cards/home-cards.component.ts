import { Component, Input } from '@angular/core';
import { ICard } from 'src/app/services/cards.service';

@Component({
  selector: 'app-home-cards',
  templateUrl: './home-cards.component.html',
  styleUrls: ['./home-cards.component.scss'],
})
export class HomeCardsComponent {
  @Input() hasCards: boolean = false;
  @Input() cards: ICard[] = [];
}
