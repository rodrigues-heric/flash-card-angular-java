import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DecksService, IDeck } from 'src/app/services/decks.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-update-deck',
  templateUrl: './update-deck.component.html',
  styleUrls: ['./update-deck.component.scss'],
})
export class UpdateDeckComponent implements OnInit, OnDestroy {
  private nameFC: FormControl = new FormControl('', Validators.required);
  private deckId: number = -1;
  private routeParamsSub!: Subscription;

  constructor(
    private router: Router,
    private decksService: DecksService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.routeParamsSub = this.route.params.subscribe((params) => {
      this.deckIdValue = Number(params['id']);
      this.deckName = params['name'];
    });
  }

  ngOnDestroy(): void {
    if (this.routeParamsSub) {
      this.routeParamsSub.unsubscribe();
    }
  }

  get deckNameControl(): FormControl {
    return this.nameFC;
  }

  get deckName(): string {
    return this.nameFC.value;
  }

  set deckName(value: string) {
    this.nameFC.setValue(value);
  }

  get deckIdValue(): number {
    return this.deckId;
  }

  set deckIdValue(value: number) {
    this.deckId = value;
  }

  public getFormValid(): boolean {
    return this.deckNameControl.valid;
  }

  public navigateToHome(): void {
    this.router.navigate(['/']);
  }

  public updateDeck(): void {
    if (this.getFormValid()) {
      const deck: IDeck = {
        id: this.deckIdValue,
        name: this.deckName,
      };

      this.decksService.updateDeck(deck).subscribe({
        next: () => this.navigateToHome(),
        error: (error) => {
          console.error('Error updating deck:', error);
        },
      });
    }
  }
}
