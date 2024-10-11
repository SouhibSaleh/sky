import { Component, OnInit } from '@angular/core';
import { UserCardComponent } from './user-card/user-card.component';
import { MyCustomPipePipe } from '../../piplines/custom_pipline/my-custom-pipe.pipe';
import { FormsModule } from '@angular/forms';
import { AllRequestsService } from '../../services/all-users/all-requests.service';
import { Router } from '@angular/router';
import { UserData } from './data/UserData';
@Component({
  selector: 'app-vacations-requests',
  standalone: true,
  imports: [UserCardComponent, MyCustomPipePipe, FormsModule],
  templateUrl: './vacations-requests.component.html',
  styleUrl: './vacations-requests.component.css'
})

export class VacationsRequestsComponent implements OnInit {

  searchTerm: string = ''
  maxCardToShow: number = 8;
  currentPage: number = 1;
  numberOfCards: number = 0;
  users: UserData[] = []
  inputList: UserData[] = []


  constructor(private allRequestsService: AllRequestsService,
    private router: Router
  ) { }
  changeList(pageNumber: number) {
    this.inputList = this.users.slice((pageNumber - 1) * 8,
      Math.min(pageNumber * 8, this.numberOfCards))
  }

  updateData(id: number) {
    this.inputList = this.inputList.filter(user => user.Id !== id)
  }
  ngOnInit(): void {
    this.users = this.allRequestsService.getUsersData()
    this.numberOfCards = this.users.length
    this.changeList(this.currentPage)
  }

  pageNumberChange(pageNumber: number) {
    this.currentPage = pageNumber
    this.changeList(this.currentPage)
    this.router.navigate(['/vacation_requests', this.currentPage])
  }
}
