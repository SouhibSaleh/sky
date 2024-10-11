import { Component, EventEmitter, input, OnInit, output } from '@angular/core';
import { Output, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgFor, NgClass } from '@angular/common';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css',
    '../user-card.component.css'
  ]
})
export class PaginationComponent implements OnInit {

  @Output() currentPage: EventEmitter<number> = new EventEmitter<number>();
  @Input() numberOfCards: number = 0;
  numberOfPages: number = 0;
  maxCardsToShow: number = 8;
  listOfNumbers: number[] = []

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.numberOfPages = Math.floor(this.numberOfCards / this.maxCardsToShow + 1)
    for (let x = 1; x <= this.numberOfPages; x++) {
      this.listOfNumbers.push(x)
    }
  }
  setPageNumber(value: number) {
    this.currentPage.emit(value)

  }

  getCurrentPageNumber() {
    let number = 0;
    this.route.paramMap.subscribe(params => {
      number = Number(params.get('id'));
    });
    return number;
  }
  plus() {
    if (this.getCurrentPageNumber() < this.numberOfPages)
      this.setPageNumber(this.getCurrentPageNumber() + 1)
  }
  minus() {
    if (this.getCurrentPageNumber() > 1)
      this.setPageNumber(this.getCurrentPageNumber() - 1)
  }
  isHidden() {
    return this.getCurrentPageNumber() === 0
  }
}
