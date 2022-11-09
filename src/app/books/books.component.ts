import { Component, OnInit } from '@angular/core';
import { BookModel } from './books.model';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  public booksList:Array<BookModel> = [];
  public singleBookObj:BookModel = {
    "bookId" : "",
    "bookTitle" : "",
    "bookDesc" : "",
    "price" : 0.0,
    "readStatus" : 0,
    "ratings" : 0,
    "authorName" : ""
  };

  constructor() { }

  public getBooksList(){

  }

  public dummyData(){
    this.booksList = [
      {
        "bookId" : "1001",
        "bookTitle" : "flksafl lkfasjdfals",
        "bookDesc" : "fasdfs af afns,fna sadnf, anfnmsafnsa,f",
        "price" : 320.0,
        "readStatus" : 20,
        "ratings" : 4,
        "authorName" : "gsagsag",
      },
      {
        "bookId" : "1001",
        "bookTitle" : "flksafl lkfasjdfals",
        "bookDesc" : "fasdfs af afns,fna sadnf, anfnmsafnsa,f",
        "price" : 320.0,
        "readStatus" : 20,
        "ratings" : 4,
        "authorName" : "gsagsag",
      },
      {
        "bookId" : "1001",
        "bookTitle" : "flksafl lkfasjdfals",
        "bookDesc" : "fasdfs af afns,fna sadnf, anfnmsafnsa,f",
        "price" : 320.0,
        "readStatus" : 20,
        "ratings" : 4,
        "authorName" : "gsagsag",
      },
      {
        "bookId" : "1001",
        "bookTitle" : "flksafl lkfasjdfals",
        "bookDesc" : "fasdfs af afns,fna sadnf, anfnmsafnsa,f",
        "price" : 320.0,
        "readStatus" : 20,
        "ratings" : 4,
        "authorName" : "gsagsag",
      },
      {
        "bookId" : "1001",
        "bookTitle" : "flksafl lkfasjdfals",
        "bookDesc" : "fasdfs af afns,fna sadnf, anfnmsafnsa,f",
        "price" : 320.0,
        "readStatus" : 20,
        "ratings" : 4,
        "authorName" : "gsagsag",
      },
      {
        "bookId" : "1001",
        "bookTitle" : "flksafl lkfasjdfals",
        "bookDesc" : "fasdfs af afns,fna sadnf, anfnmsafnsa,f",
        "price" : 320.0,
        "readStatus" : 20,
        "ratings" : 4,
        "authorName" : "gsagsag",
      },
      {
        "bookId" : "1001",
        "bookTitle" : "flksafl lkfasjdfals",
        "bookDesc" : "fasdfs af afns,fna sadnf, anfnmsafnsa,f",
        "price" : 320.0,
        "readStatus" : 20,
        "ratings" : 4,
        "authorName" : "gsagsag",
      },
      {
        "bookId" : "1001",
        "bookTitle" : "flksafl lkfasjdfals",
        "bookDesc" : "fasdfs af afns,fna sadnf, anfnmsafnsa,f",
        "price" : 320.0,
        "readStatus" : 20,
        "ratings" : 4,
        "authorName" : "gsagsag",
      },
      {
        "bookId" : "1001",
        "bookTitle" : "flksafl lkfasjdfals",
        "bookDesc" : "fasdfs af afns,fna sadnf, anfnmsafnsa,f",
        "price" : 320.0,
        "readStatus" : 20,
        "ratings" : 4,
        "authorName" : "gsagsag",
      },
      {
        "bookId" : "1001",
        "bookTitle" : "flksafl lkfasjdfals",
        "bookDesc" : "fasdfs af afns,fna sadnf, anfnmsafnsa,f",
        "price" : 320.0,
        "readStatus" : 20,
        "ratings" : 4,
        "authorName" : "gsagsag",
      },
      {
        "bookId" : "1001",
        "bookTitle" : "flksafl lkfasjdfals",
        "bookDesc" : "fasdfs af afns,fna sadnf, anfnmsafnsa,f",
        "price" : 320.0,
        "readStatus" : 20,
        "ratings" : 4,
        "authorName" : "gsagsag",
      },
      {
        "bookId" : "1001",
        "bookTitle" : "flksafl lkfasjdfals",
        "bookDesc" : "fasdfs af afns,fna sadnf, anfnmsafnsa,f",
        "price" : 320.0,
        "readStatus" : 20,
        "ratings" : 4,
        "authorName" : "gsagsag",
      },
      {
        "bookId" : "1001",
        "bookTitle" : "flksafl lkfasjdfals",
        "bookDesc" : "fasdfs af afns,fna sadnf, anfnmsafnsa,f",
        "price" : 320.0,
        "readStatus" : 20,
        "ratings" : 4,
        "authorName" : "gsagsag",
      },
      {
        "bookId" : "1001",
        "bookTitle" : "flksafl lkfasjdfals",
        "bookDesc" : "fasdfs af afns,fna sadnf, anfnmsafnsa,f",
        "price" : 320.0,
        "readStatus" : 20,
        "ratings" : 4,
        "authorName" : "gsagsag",
      },
      {
        "bookId" : "1001",
        "bookTitle" : "flksafl lkfasjdfals",
        "bookDesc" : "fasdfs af afns,fna sadnf, anfnmsafnsa,f",
        "price" : 320.0,
        "readStatus" : 20,
        "ratings" : 4,
        "authorName" : "gsagsag",
      },
      {
        "bookId" : "1001",
        "bookTitle" : "flksafl lkfasjdfals",
        "bookDesc" : "fasdfs af afns,fna sadnf, anfnmsafnsa,f",
        "price" : 320.0,
        "readStatus" : 20,
        "ratings" : 4,
        "authorName" : "gsagsag",
      }
    ]
  }

  ngOnInit(): void {
    this.dummyData();
  }

}
