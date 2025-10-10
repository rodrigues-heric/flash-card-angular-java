import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DecksService {
  private readonly API_URL = 'http://localhost:8080/api/decks';

  constructor(private http: HttpClient) {}

  public async saveDeck(deckName: string): Promise<void> {
    try {
      const url: string = this.API_URL + '/save';
      await lastValueFrom(this.http.post(url, { name: deckName }));
    } catch (error) {
      console.error('Error saving deck:', error);
    }
  }
}
