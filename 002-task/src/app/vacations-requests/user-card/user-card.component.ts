import { Component, input, OnInit } from '@angular/core';
import { UserData } from '../data/UserData';
import { NgFor } from '@angular/common';
import { MyCustomPipePipe } from '../../my-custom-pipe.pipe';
import { Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [NgFor, MyCustomPipePipe, CommonModule],
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css',
    '../vacations-requests.component.css']

})
export class UserCardComponent implements OnInit {
  User: UserData[] = []
  @Input() searchTerm: string = ''
  ngOnInit(): void {
    let tempUser: UserData[] = [{
      Id: 1,
      Img: '/images/suhib1.jpeg',
      Firstname: "Suhib",
      Lastname: "Saleh",
      Date: `2024/09/26`,
      Duration: "3 Weeks",
      Salary: 1000
    },
    {
      Id: 2,
      Img: '/images/ghaliah1.jfif',
      Firstname: "Ghaliah",
      Lastname: "Samer",
      Date: `2024/09/26`,
      Duration: "3 Weeks",
      Salary: 1000
    }, {
      Id: 3,
      Img: '/images/muhaisen.jfif',
      Firstname: "Ahmad",
      Lastname: "Muhaisen",
      Date: `2024/09/26`,
      Duration: "3 Weeks",
      Salary: 1000
    },
    ]
    this.User = tempUser
  }
  onDeclineRequest(userId: number): void {
    this.User = this.User.filter(user => user.Id !== userId)
  }

}
