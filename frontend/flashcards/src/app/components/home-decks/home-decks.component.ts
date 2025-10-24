import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DecksService, IDeck } from 'src/app/services/decks.service';

@Component({
  selector: 'app-home-decks',
  templateUrl: './home-decks.component.html',
  styleUrls: ['./home-decks.component.scss'],
})
export class HomeDecksComponent {
  @Input() hasDecks: boolean = false;
  @Input() decks: IDeck[] = [];
  @Input() isRemoveOption: boolean = false;

  @Output() deckToRemove: EventEmitter<number> = new EventEmitter<number>();

  constructor(private router: Router, private decksService: DecksService) {}

  public navigateToUpdateDeck(deck: IDeck): void {
    this.router.navigate(['/update-deck', deck.id], {
      state: { deckData: deck },
    });
  }

  public navigateToDeck(deck: IDeck): void {
    this.router.navigate(['/deck', deck.id], {
      state: { deckData: deck },
    });
  }

  public onRemoveDeck(id: number): void {
    this.deckToRemove.emit(id);
  }
}
