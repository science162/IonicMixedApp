import { NewsApiGlobal } from './../models/newsapi-global.model';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
@Injectable()
export class NewsApiServices{

  private baseUrl: string = 'https://newsapi.org/v2/top-headlines?';
  private source: string = 'the-next-web';
  private apiKey = '1ad79344a9014b87a724907eaa6f566e'

  constructor(private http: Http){

  }
    public getHeadlines(): Promise<void | NewsApiGlobal>{
      const url = `${this.baseUrl}sources=${this.source}&apiKey=${this.apiKey}`;

      const newLocal = this.http.get(url)
        .toPromise()
        .then(response => response.json() as NewsApiGlobal)
        .catch(erroe => console.log('Erreur survenue' + console.error()));
      return newLocal

    }
}
