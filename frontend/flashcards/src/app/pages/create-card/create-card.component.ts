import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CardsService, ICardPost } from 'src/app/services/cards.service';

const TIME_TO_FLIP = 1500;

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.scss'],
})
export class CreateCardComponent implements OnInit, OnDestroy {
  private isFlipped = false;
  private flipInterval!: any;
  private frontFC: FormControl = new FormControl('', [Validators.required]);
  private backFC: FormControl = new FormControl('', [Validators.required]);
  private deckId: number[] | undefined;

  constructor(private router: Router, private cardsService: CardsService) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras?.state as { deckId: number };

    if (state && state.deckId) {
      this.deckId = [state.deckId];
    }
  }

  get deckIdValue(): number[] | undefined {
    return this.deckId;
  }

  set deckIdValue(id: number[]) {
    this.deckId = id;
  }

  get flipped(): boolean {
    return this.isFlipped;
  }

  get frontControl(): FormControl {
    return this.frontFC;
  }

  get frontFCValue(): string {
    return this.frontFC.value;
  }

  get backControl(): FormControl {
    return this.backFC;
  }

  get backFCValue(): string {
    return this.backFC.value;
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
    if (this.getFormsValid()) {
      const newCard: ICardPost = {
        faceText: this.frontFCValue,
        backText: this.backFCValue,
        deckId: this.deckIdValue,
      };

      this.cardsService.saveCard(newCard).subscribe({
        next: () => {
          if (this.deckIdValue && this.deckIdValue.length > 0) {
            this.router.navigate(['/deck', this.deckIdValue[0]]);
            return;
          }
          this.navigateToHome();
        },
        error: (error) => {
          console.error('Error saving card:', error);
        },
      });
    }
  }

  public getFrontFormValid(): boolean {
    return this.frontControl.valid;
  }

  public getBackFormValid(): boolean {
    return this.backControl.valid;
  }

  public getFormsValid(): boolean {
    return this.getFrontFormValid() && this.getBackFormValid();
  }
}
