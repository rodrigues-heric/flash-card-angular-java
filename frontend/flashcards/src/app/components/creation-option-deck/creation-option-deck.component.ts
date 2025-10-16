import { Component, Input } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-creation-option-deck',
  templateUrl: './creation-option-deck.component.html',
  styleUrls: ['./creation-option-deck.component.scss'],
  animations: [
    trigger('moveUpState', [
      state('default', style({ transform: 'translateY(0)' })),
      state('up', style({ transform: 'translateY(-20px)' })),
      transition('default <=> up', animate('300ms ease-in-out')),
    ]),
  ],
})
export class CreationOptionDeckComponent {
  @Input() moveState: 'default' | 'up' = 'default';
}
