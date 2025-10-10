import { Component } from '@angular/core';
import { trigger, style, transition, animate } from '@angular/animations';

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
export class HomeComponent {
  private isOptionsOpen = false;

  public getOptionsState(): boolean {
    return this.isOptionsOpen;
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
}
