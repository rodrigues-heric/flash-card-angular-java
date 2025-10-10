import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.scss'],
})
export class CreateCardComponent {
  constructor(private router: Router) {}

  public navigateToHome(): void {
    this.router.navigate(['/']);
  }

  public saveFlashcard(): void {
    // TODO: Implement save flashcard functionality
    this.navigateToHome();
  }
}
