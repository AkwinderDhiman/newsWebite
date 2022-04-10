import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../service/news-api.service';

@Component({
  selector: 'app-everything-news',
  templateUrl: './everything-news.component.html',
  styleUrls: ['./everything-news.component.scss']
})
export class EverythingNewsComponent implements OnInit {

  constructor(private api: NewsApiService) { }

  everthingNews: any = [];

  ngOnInit(): void {
    this.api.newsEverthing().subscribe((result) => {
      console.log(result.articles);
      this.everthingNews = result.articles;
    })
  }

}
