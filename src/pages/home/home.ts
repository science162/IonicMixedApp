import { NewsApiGlobal } from './../../models/newsapi-global.model';
import { NewsApiServices } from './../../services/newapi.service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  nom: string;
  prenom: string;
  age: number;

  news: void | NewsApiGlobal;

  constructor(public navCtrl: NavController, private newsApiServices:  NewsApiServices) {

      this.newsApiServices.getHeadlines()
      .then(newsFetched => {
        this.news = newsFetched;
        console.log(this.news);
      })
  }


}
