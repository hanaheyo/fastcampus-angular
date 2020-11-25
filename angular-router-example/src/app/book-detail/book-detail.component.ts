import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  bookId;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.bookId = this.route.snapshot.paramMap.get('id');
    this.route.paramMap.subscribe(data => {
      this.bookId = data.get('id');
    })
  }

}
