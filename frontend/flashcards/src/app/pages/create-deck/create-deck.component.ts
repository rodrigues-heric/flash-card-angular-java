import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-deck',
  templateUrl: './create-deck.component.html',
  styleUrls: ['./create-deck.component.scss'],
})
export class CreateDeckComponent {
  constructor(private router: Router) {}

  public navigateToHome(): void {
    this.router.navigate(['/']);
  }

  public saveDeck(): void {
    // TODO: Implement save deck functionality
    this.navigateToHome();
  }
}
