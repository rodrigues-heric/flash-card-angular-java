import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

declare var bootstrap: any;

@Component({
  selector: 'app-create-deck',
  templateUrl: './create-deck.component.html',
  styleUrls: ['./create-deck.component.scss'],
})
export class CreateDeckComponent {
  private nameFC: FormControl = new FormControl('', Validators.required);

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

  public getFormValid(): boolean {
    return this.deckNameControl.valid;
  }

  public navigateToHome(): void {
    this.router.navigate(['/']);
  }

  public saveDeck(): void {
    if (this.getFormValid()) {
      //this.navigateToHome();
    }
  }
}
