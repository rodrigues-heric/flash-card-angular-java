import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap, catchError, of } from 'rxjs';

export interface IDeck {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class DecksService {
  private readonly API_URL = 'http://localhost:8080/api/decks';
  private isDownloading = false;

  constructor(private http: HttpClient) {}

  get downloading(): boolean {
    return this.isDownloading;
  }

  set downloading(value: boolean) {
    this.isDownloading = value;
  }

  public getAllDecks(): Observable<IDeck[]> {
    this.downloading = true;
    const url: string = this.API_URL + '/all';

    return this.http.get<IDeck[]>(url).pipe(
      tap(() => (this.downloading = false)),
      catchError((error) => {
        console.error('Error fetching decks:', error);
        this.downloading = false;
        return of([]);
      })
    );
  }

  public saveDeck(deckName: string): Observable<any> {
    this.downloading = true;
    const url: string = this.API_URL + '/save';

    return this.http.post(url, { name: deckName }).pipe(
      tap(() => (this.downloading = false)),
      catchError((error) => {
        console.error('Error saving deck:', error);
        this.downloading = false;
        throw error;
      })
    );
  }
}
