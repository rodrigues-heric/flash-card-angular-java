import { Component, Input } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-creation-option-card',
  templateUrl: './creation-option-card.component.html',
  styleUrls: ['./creation-option-card.component.scss'],
  animations: [
    trigger('moveUpState', [
      state('default', style({ transform: 'translateY(0)' })),
      state('up', style({ transform: 'translateY(-20px)' })),
      transition('default <=> up', animate('300ms ease-in-out')),
    ]),
  ],
})
export class CreateOptionCardComponent {
  @Input() moveState: 'default' | 'up' = 'default';
}
