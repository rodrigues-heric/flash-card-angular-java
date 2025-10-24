import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-deck-info',
  templateUrl: './deck-info.component.html',
  styleUrls: ['./deck-info.component.scss'],
})
export class DeckInfoComponent {
  @Input() hasCards: boolean = false;
}
