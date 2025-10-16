import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';

export interface ICard {
  id: number;
  faceText: string;
  backText: string;
  deckId?: number;
}

export interface ICardPost {
  faceText: string;
  backText: string;
  deckId?: number;
}

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  private readonly API_URL = 'http://localhost:8080/api/flashcards';
  private isDownloading = false;

  constructor(private http: HttpClient) {}

  get downloading(): boolean {
    return this.isDownloading;
  }

  set downloading(value: boolean) {
    this.isDownloading = value;
  }

  public getAllCards(): Observable<ICard[]> {
    this.downloading = true;
    const url: string = this.API_URL + '/all';

    return this.http.get<ICard[]>(url).pipe(
      tap(() => (this.downloading = false)),
      catchError((error) => {
        console.error('Error fetching cards:', error);
        this.downloading = false;
        return of([]);
      })
    );
  }

  public saveCard(card: ICardPost): Observable<any> {
    this.downloading = true;
    const url: string = this.API_URL + '/save';

    return this.http.post(url, card).pipe(
      tap(() => (this.downloading = false)),
      catchError((error) => {
        console.error('Error saving card:', error);
        this.downloading = false;
        throw error;
      })
    );
  }

  public updateCard(card: ICard): Observable<any> {
    this.downloading = true;
    const url: string = `${this.API_URL}/${card.id}`;

    return this.http.put(url, card).pipe(
      tap(() => (this.downloading = false)),
      catchError((error) => {
        console.error('Error updating card:', error);
        this.downloading = false;
        throw error;
      })
    );
  }
}
