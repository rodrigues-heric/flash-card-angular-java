import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

const TIME_TO_FLIP = 1500;

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.scss'],
})
export class CreateCardComponent implements OnInit, OnDestroy {
  private isFlipped = false;
  private frontText = '';
  private backText = '';
  private flipInterval: any;

  constructor(private router: Router) {}

  get flipped(): boolean {
    return this.isFlipped;
  }

  get frontTextValue(): string {
    return this.frontText;
  }

  set frontTextValue(value: string) {
    this.frontText = value;
  }

  get backTextValue(): string {
    return this.backText;
  }

  set backTextValue(value: string) {
    this.backText = value;
  }

  ngOnInit(): void {
    this.startFlipping();
  }

  ngOnDestroy(): void {
    if (this.flipInterval) {
      clearInterval(this.flipInterval);
    }
  }

  private startFlipping(): void {
    this.flipInterval = setInterval(() => {
      this.toggleFlip();
    }, TIME_TO_FLIP);
  }

  public toggleFlip(): void {
    this.isFlipped = !this.isFlipped;
  }

  public navigateToHome(): void {
    this.router.navigate(['/']);
  }

  public saveFlashcard(): void {
    // TODO: Implement save flashcard functionality
    this.navigateToHome();
  }
}
