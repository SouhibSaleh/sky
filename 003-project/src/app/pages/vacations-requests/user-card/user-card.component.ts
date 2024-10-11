import { Component, EventEmitter, input, OnInit } from '@angular/core';
import { UserData } from '../data/UserData';
import { NgFor } from '@angular/common';
import { MyCustomPipePipe } from '../../../piplines/custom_pipline/my-custom-pipe.pipe';
import { Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination/pagination.component';
@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [NgFor, MyCustomPipePipe, CommonModule, PaginationComponent],
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css',
    // '../vacations-requests.component.css'
  ]

})
export class UserCardComponent implements OnInit {
  @Input() User: UserData[] = []
  @Input() searchTerm: string = ''
  @Input() numberOfCards!: number;
  @Input() maxCardsToShow!: number
  @Output() pageNumber: EventEmitter<number> = new EventEmitter<number>();
  @Output() deletedId: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit(): void {


  }

  onDeclineRequest(userId: number): void {
    //this.User = this.User.filter(user => user.Id !== userId)
    this.deletedId.emit(userId)
  }

  getPageNumber(pageNumber: number) {
    this.pageNumber.emit(pageNumber)
  }


  pageChange(value: number) {
    console.log(value)
  }
}
