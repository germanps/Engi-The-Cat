import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CatFact } from '../../interfaces/cat';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  constructor(private http: HttpClient) { }

  getCatFact(): Observable<CatFact>{
    return this.http.get<CatFact>('https://catfact.ninja/fact')
  }

  getCatImageByWord(word: string): string {
     return `https://cataas.com/cat/says/${word}`
  }
}
