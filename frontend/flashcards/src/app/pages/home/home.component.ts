import { Component, OnDestroy, OnInit } from '@angular/core';
import { trigger, style, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';
import { DecksService, IDeck } from 'src/app/services/decks.service';
import { CardsService, ICard } from 'src/app/services/cards.service';
import { combineLatest, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
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
export class HomeComponent implements OnInit, OnDestroy {
  private isOptionsOpen: boolean = false;
  private isRemoveSelected: boolean = false;
  private allDecks: IDeck[] = [];
  private allCards: ICard[] = [];
  private combinedSubscription: Subscription = new Subscription();

  constructor(
    private router: Router,
    private decksService: DecksService,
    private cardsService: CardsService
  ) {}

  ngOnInit(): void {
    this.combinedSubscription = combineLatest([
      this.decksService.getAllDecks(),
      this.cardsService.getAllCards(),
    ]).subscribe({
      next: ([decks, cards]: [IDeck[], ICard[]]) => {
        this.decks = decks;
        this.cards = cards;
      },
      error: (error) => {
        console.error('Error fetching decks or cards:', error);
      },
    });
  }

  ngOnDestroy(): void {
    this.combinedSubscription.unsubscribe();
  }

  get optionsState(): boolean {
    return this.isOptionsOpen;
  }

  get isRemoveOption(): boolean {
    return this.isRemoveSelected;
  }

  get decks(): IDeck[] {
    return this.allDecks;
  }

  set decks(decks: IDeck[]) {
    this.allDecks = decks;
  }

  get cards(): ICard[] {
    return this.allCards;
  }

  set cards(cards: ICard[]) {
    this.allCards = cards;
  }

  get isDownloading(): boolean {
    return this.decksService.downloading || this.cardsService.downloading;
  }

  get hasDecks(): boolean {
    return this.decks.length > 0;
  }

  get hasCards(): boolean {
    return this.cards.length > 0;
  }

  public toggleOptionsState(): void {
    this.isOptionsOpen = !this.isOptionsOpen;
  }

  public toggleRemoveOption(): void {
    this.isRemoveSelected = !this.isRemoveSelected;
  }

  public getAnimationState(): 'default' | 'rotated' {
    return this.isOptionsOpen ? 'rotated' : 'default';
  }

  public getMoveState(): 'default' | 'up' {
    return this.isOptionsOpen ? 'up' : 'default';
  }

  public navigateToCreateCard(): void {
    this.router.navigate(['/create-card']);
  }

  public navigateToCreateDeck(): void {
    this.router.navigate(['/create-deck']);
  }

  public removeFromDeck(id: number): void {
    this.decks = this.decks.filter((deck) => deck.id !== id);
  }

  public removeFromCards(id: number): void {
    this.cards = this.cards.filter((card) => card.id !== id);
  }

  public haveDecksOrCards(): boolean {
    return this.hasDecks || this.hasCards;
  }
}
