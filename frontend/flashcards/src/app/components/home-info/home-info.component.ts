import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-info',
  templateUrl: './home-info.component.html',
  styleUrls: ['./home-info.component.scss'],
})
export class HomeInfoComponent {
  @Input() hasDecks: boolean = false;
  @Input() hasCards: boolean = false;

  get showInfo(): boolean {
    return !this.hasDecks && !this.hasCards;
  }
}
