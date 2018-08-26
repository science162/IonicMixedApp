import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

const DATABASE_FILE_NAME: string = 'data.db';

@IonicPage()
@Component({
  selector: 'page-storage',
  templateUrl: 'storage.html',
})

export class StoragePage {

  private db: SQLiteObject;

  titleMovie: String;
  Movierate: number;
  description:string;
  categorie: string;
  movies: string[] ;

  constructor(public navCtrl: NavController, public navParams: NavParams, private sqlite: SQLite) {
   // this.createDatabaseFile();
    this.movies = [];
  }
/*
  private createDatabaseFile(): void {
    this.sqlite.create({
      name: DATABASE_FILE_NAME,
      location: 'default'
    })
      .then((db: SQLiteObject) => {
      this.db = db;
      console.log('BD créé');
      this.creerTable();
      })
      .catch(e => console.log(e));
  }

  private creerTable():void {

    this.db.executeSql('CREATE TABLE IF NOT EXISTS `categories` ( `idCategorie` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, `name` TEXT NOT NULL )', {})
      .then(() => {
        console.log('Tables Categorie créé');
        this.db.executeSql('CREATE TABLE IF NOT EXISTS `movies` ( `idMovies` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, `name` TEXT NOT NULL, `eval` INTEGER NOT NULL, `desc` TEXT NOT NULL, `categorie` INTEGER NOT NULL, FOREIGN KEY(`categorie`) REFERENCES `categories`(`idCategorie`) )', {})
        .then(()=> console.log('Table Movie créé avec successsssssssssssssssssssssss ! '))
        .catch(e => console.log(e , 'Echec creation table2'));
      })
      .catch(e1 => console.log(e1, 'Echec creation table1 && table2'));
  }

  public saveMovies():void {
    this.db.executeSql('insert into `categories` (name) values (\''+this.categorie+'\')',{})
    .then(()=>{
      console.log('categorie inserted');
      this.db.executeSql('insert into `movies` (name,eval,desc,categorie) values (\''+this.titleMovie+'\','+this.Movierate+',\''+this.description+'\',last_insert_rowid())',{})
      .then(()=>console.log('Movie inserted'))
      .catch(e=> console.log('echec movie'))
    })
    .catch(e=>console.log('echec categorie'))
    //insert into `movies` (name,eval,desc,categorie) values ('Rambo',4,'il est mm die',1)
    //insert into `categories` (name) values ('action')
    console.log('sauvegarde executé');
  }

  public showMovies(): void {
    this.movies = []
    this.db.executeSql('select name from `movies`',{})
    .then((data) => {
      if(data == null){
        return;
      }
      if(data.rows) {
        if(data.rows.length > 0){
          for(var i = 0; i < data.rows.length;i++){
            this.movies.push(data.rows.item(i).name);
          }
        }
      }
    })
  }
*/
}
