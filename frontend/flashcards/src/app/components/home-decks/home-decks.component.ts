import { Component, Input } from '@angular/core';
import { IDeck } from 'src/app/services/decks.service';

@Component({
  selector: 'app-home-decks',
  templateUrl: './home-decks.component.html',
  styleUrls: ['./home-decks.component.scss'],
})
export class HomeDecksComponent {
  @Input() hasDecks: boolean = false;
  @Input() decks: IDeck[] = [];
}
