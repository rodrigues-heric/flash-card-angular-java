import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CardsService, ICard } from 'src/app/services/cards.service';

const TIME_TO_FLIP = 1500;

@Component({
  selector: 'app-update-card',
  templateUrl: './update-card.component.html',
  styleUrls: ['./update-card.component.scss'],
})
export class UpdateCardComponent implements OnInit, OnDestroy {
  private isFlipped = false;
  private flipInterval!: any;
  private cardId: number = -1;
  private frontFC: FormControl = new FormControl('', [Validators.required]);
  private backFC: FormControl = new FormControl('', [Validators.required]);
  private routeParamsSub!: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private cardsService: CardsService
  ) {}

  ngOnInit(): void {
    this.startFlipping();

    this.routeParamsSub = this.route.params.subscribe((params) => {
      this.cardIdValue = Number(params['id']);
      this.frontFC.setValue(params['frontText']);
      this.backFC.setValue(params['backText']);
    });
  }

  ngOnDestroy(): void {
    if (this.routeParamsSub) {
      this.routeParamsSub.unsubscribe();
    }

    if (this.flipInterval) {
      clearInterval(this.flipInterval);
    }
  }

  get flipped(): boolean {
    return this.isFlipped;
  }

  get cardIdValue(): number {
    return this.cardId;
  }

  set cardIdValue(value: number) {
    this.cardId = value;
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

  public updateFlashcard(): void {
    if (this.getFormsValid()) {
      const updatedCard: ICard = {
        id: this.cardIdValue,
        faceText: this.frontFCValue,
        backText: this.backFCValue,
      };

      this.cardsService.updateCard(updatedCard).subscribe({
        next: () => this.navigateToHome(),
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
