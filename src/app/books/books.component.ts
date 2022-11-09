import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  public booksList:Array<Object> = [];
  public singleBookObj:Object = {
    "bookId" : "",
    "bookTitle" : "",
    "bookDesc" : "",
    "price" : 0.0,
    "readStatus" : 0,
    "ratings" : 0,
    "authorName" : "",
  };

  constructor() { }

  public getBooksList(){

  }

  ngOnInit(): void {
  }

}
