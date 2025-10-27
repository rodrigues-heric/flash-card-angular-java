import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Navigation, Router } from '@angular/router';
import { combineLatest, Subscription } from 'rxjs';
import { CardsService, ICard } from 'src/app/services/cards.service';
import { DecksService, IDeck } from 'src/app/services/decks.service';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.scss'],
  animations: [
    trigger('optionsAnimation', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateY(20px)',
        }),
        animate(
          '300ms ease-out',
          style({
            opacity: 1,
            transform: 'translateY(0)',
          })
        ),
      ]),
      transition(':leave', [
        animate(
          '200ms ease-in',
          style({
            opacity: 0,
            transform: 'translateY(20px)',
          })
        ),
      ]),
    ]),
  ],
})
export class DeckComponent implements OnInit, OnDestroy {
  private isRemoveSelected: boolean = false;
  private combinedSubscription: Subscription = new Subscription();
  private routeParamsSub!: Subscription;
  private allCards: ICard[] = [];
  private deck!: IDeck;
  private isOptionsOpen: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private decksService: DecksService,
    private cardsService: CardsService
  ) {}

  ngOnInit(): void {
    const navigation: Navigation | null = this.router.getCurrentNavigation();
    const deckData: IDeck | undefined = navigation?.extras?.state?.[
      'deckData'
    ] as IDeck;

    if (deckData) {
      this.deckValue = deckData;
    } else {
      this.routeParamsSub = this.route.params.subscribe((params) => {
        const deckId: number | null = params['id'];

        if (deckId) {
          this.combinedSubscription = combineLatest([
            this.decksService.getDeck(deckId),
            this.cardsService.getCardsByDeckId(deckId),
          ]).subscribe({
            next: ([deck, cards]) => {
              this.deckValue = deck;
              this.cards = cards;
            },
            error: (error) => {
              console.error('Error loading deck or cards:', error);
              this.router.navigate(['/']);
            },
          });
        } else {
          this.router.navigate(['/']);
        }
      });
    }
  }

  ngOnDestroy(): void {
    this.combinedSubscription.unsubscribe();

    if (this.routeParamsSub) {
      this.routeParamsSub.unsubscribe();
    }
  }

  get deckValue(): IDeck {
    return this.deck;
  }

  set deckValue(deck: IDeck) {
    this.deck = deck;
  }

  get deckNameValue(): string {
    return this.deck.name;
  }

  set deckNameValue(name: string) {
    this.deck.name = name;
  }

  get cards(): ICard[] {
    return this.allCards;
  }

  set cards(cards: ICard[]) {
    this.allCards = cards;
  }

  get hasCards(): boolean {
    return this.allCards.length > 0;
  }

  get isRemoveOption(): boolean {
    return this.isRemoveSelected;
  }

  get optionsState(): boolean {
    return this.isOptionsOpen;
  }

  public navigateToHome(): void {
    this.router.navigate(['/']);
  }

  public navigateToCreateCard(): void {
    this.router.navigate(['/create-card'], {
      state: { deckId: this.deck.id },
    });
  }

  public toggleRemoveOption(): void {
    this.isRemoveSelected = !this.isRemoveSelected;
  }

  public removeFromCards(id: number): void {
    this.cardsService.deleteCard(id).subscribe({
      next: () => {
        this.cards = this.cards.filter((card) => card.id !== id);
      },
      error: (err) => {
        console.error('Error deleting card:', err);
      },
    });
  }

  public isDownloading(): boolean {
    return this.decksService.downloading || this.cardsService.downloading;
  }

  public getMoveState(): 'default' | 'up' {
    return this.isOptionsOpen ? 'up' : 'default';
  }

  public getAnimationState(): 'default' | 'rotated' {
    return this.isOptionsOpen ? 'rotated' : 'default';
  }

  public toggleOptionsState(): void {
    this.isOptionsOpen = !this.isOptionsOpen;
  }
}
