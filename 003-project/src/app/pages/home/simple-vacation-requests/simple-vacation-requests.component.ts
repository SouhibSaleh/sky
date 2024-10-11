import { Component, OnInit } from '@angular/core';
import { UserCardComponent } from '../../vacations-requests/user-card/user-card.component';
import { UserData } from '../../vacations-requests/data/UserData';
import { AllRequestsService } from '../../../services/all-users/all-requests.service';
@Component({
  selector: 'app-simple-vacation-requests',
  standalone: true,
  imports: [UserCardComponent],
  templateUrl: './simple-vacation-requests.component.html',
  styleUrls: ['./simple-vacation-requests.component.css',
  ]
})
export class SimpleVacationRequestsComponent implements OnInit {
  maxCardsToShow: number = 4
  userList: UserData[] = []
  constructor(private allRequests: AllRequestsService) { }
  ngOnInit(): void {
    this.userList = this.allRequests.getUsersData().slice(0, this.maxCardsToShow)
  }
  updateData(id: number) {
    this.userList = this.userList.filter(user => user.Id !== id)
  }
}
