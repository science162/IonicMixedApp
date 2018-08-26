import { DetailsPage } from "./../details/details";
import { NativeStoragePage } from './../native-storage/native-storage';
import { StoragePage } from './../storage/storage';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = DetailsPage;
  tab3Root = NativeStoragePage;
  tab4Root = StoragePage;

  constructor() {

  }

}
