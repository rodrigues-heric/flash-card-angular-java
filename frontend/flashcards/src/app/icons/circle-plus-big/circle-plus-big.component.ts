import { Component, Input } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'icon-circle-plus-big',
  templateUrl: './circle-plus-big.component.html',
  styleUrls: ['./circle-plus-big.component.scss'],
  animations: [
    trigger('rotateState', [
      state('default', style({ transform: 'rotate(0)' })),
      state('rotated', style({ transform: 'rotate(225deg)' })),
      transition('default <=> rotated', animate('300ms ease-in-out')),
    ]),
  ],
})
export class CirclePlusBigComponent {
  @Input() rotationState: 'default' | 'rotated' = 'default';
}
