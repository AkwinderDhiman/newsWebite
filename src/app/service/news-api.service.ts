import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  constructor(private httpClient: HttpClient) { }
  topHeadlineNews = "https://newsapi.org/v2/everything?q=tesla&from=2022-03-09&sortBy=publishedAt&apiKey=dc9b9cbb496444bf811bc06a6e1d4bee"

  news = " https://newsapi.org/v2/everything?q=keyword&apiKey=dc9b9cbb496444bf811bc06a6e1d4bee";

  newsHeadlines(): Observable<any> {
    return this.httpClient.get(this.topHeadlineNews)
  }

  newsEverthing(): Observable<any> {
    return this.httpClient.get(this.news)
  }
}
