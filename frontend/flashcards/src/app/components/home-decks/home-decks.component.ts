import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IDeck } from 'src/app/services/decks.service';

@Component({
  selector: 'app-home-decks',
  templateUrl: './home-decks.component.html',
  styleUrls: ['./home-decks.component.scss'],
})
export class HomeDecksComponent {
  @Input() hasDecks: boolean = false;
  @Input() decks: IDeck[] = [];

  constructor(private router: Router) {}

  public navigateToUpdateDeck(deck: IDeck): void {
    this.router.navigate(['/update-deck', deck.id], {
      state: { deckData: deck },
    });
  }
}
