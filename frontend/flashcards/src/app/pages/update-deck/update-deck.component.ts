import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DecksService } from 'src/app/services/decks.service';

@Component({
  selector: 'app-update-deck',
  templateUrl: './update-deck.component.html',
  styleUrls: ['./update-deck.component.scss'],
})
export class UpdateDeckComponent implements OnInit {
  private nameFC: FormControl = new FormControl('', Validators.required);
  private deckId: number = -1;

  constructor(
    private router: Router,
    private decksService: DecksService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.deckIdValue = Number(params['id']);
      this.deckName = params['name'];
    });
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

  public saveDeck(): void {
    if (this.getFormValid()) {
      this.decksService.saveDeck(this.deckName).subscribe({
        next: () => this.navigateToHome(),
        error: (error) => {
          console.error('Error saving deck:', error);
        },
      });
    }
  }
}
