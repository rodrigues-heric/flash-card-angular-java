import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-deck',
  templateUrl: './create-deck.component.html',
  styleUrls: ['./create-deck.component.scss'],
})
export class CreateDeckComponent {
  private nameFC: FormControl = new FormControl('');

  constructor(private router: Router) {}

  get deckNameControl(): FormControl {
    return this.nameFC;
  }

  get deckName(): string {
    return this.nameFC.value;
  }

  set deckName(value: string) {
    this.nameFC.setValue(value);
  }

  public navigateToHome(): void {
    this.router.navigate(['/']);
  }

  public saveDeck(): void {
    // TODO: Implement save deck functionality
    this.navigateToHome();
  }
}
