import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  private isOptionsOpen = false;

  public getOptionsState(): boolean {
    return this.isOptionsOpen;
  }

  public toggleOptionsState(): void {
    this.isOptionsOpen = !this.isOptionsOpen;
  }
}
