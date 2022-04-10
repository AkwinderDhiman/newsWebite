import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../service/news-api.service';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class newsComponent implements OnInit {

  constructor( private api:NewsApiService) { }

  newsData:any=[];

  ngOnInit(): void {
    this.api.newsHeadlines().subscribe((result)=>{
      console.log(result.articles);
      this.newsData =result.articles;
    })
  }

}
