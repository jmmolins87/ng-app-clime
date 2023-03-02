import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimeService {

  public apiUrl: string = 'https://api.openweathermap.org/data/2.5/weather?q=';
  public apiKey: string = '&appid=e5cbb2a1b63d96fb5d4da928a2495539';

  constructor( private http: HttpClient ) { }

  getWeather( city: string ): Observable<any> {
    const URL = `${ this.apiUrl }${ city }${ this.apiKey }`;
    return this.http.get( URL );
  }
}