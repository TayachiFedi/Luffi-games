import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {


  constructor(private http: HttpClient) { }
  private url ='http://localhost:3000/';

  heros: any[] = [];

  createNewHero(hero: any): Observable<any> {
    return this.http.post(this.url + 'hero/ajout', hero);
  }
  GetAllHeros(): Observable<any> {
    return this.http.get(this.url + 'hero/all');
  }

}
