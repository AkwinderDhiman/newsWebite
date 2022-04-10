import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EverythingNewsComponent } from './everything-news/everything-news.component';
import { newsComponent } from './news/news.component';

const routes: Routes = [
  {path:"" , component: newsComponent },
  {path:"news" , component: EverythingNewsComponent },
  {path:"search/:searchTerm" , component: newsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
