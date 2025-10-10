import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';
import { DecksService, IDeck } from 'src/app/services/decks.service';

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
export class HomeComponent implements OnInit {
  private isOptionsOpen = false;
  private allDecks: IDeck[] = [];

  constructor(private router: Router, private decksService: DecksService) {}

  ngOnInit(): void {
    this.decksService.getAllDecks().subscribe({
      next: (decks: IDeck[]) => {
        this.decks = decks;
      },
      error: (error) => {
        console.error('Error fetching decks:', error);
      },
    });
  }

  get optionsState(): boolean {
    return this.isOptionsOpen;
  }

  get decks(): IDeck[] {
    return this.allDecks;
  }

  set decks(decks: IDeck[]) {
    this.allDecks = decks;
  }

  get isDownloading(): boolean {
    return this.decksService.downloading;
  }

  get hasDecks(): boolean {
    return this.decks.length > 0;
  }

  public toggleOptionsState(): void {
    this.isOptionsOpen = !this.isOptionsOpen;
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
}
