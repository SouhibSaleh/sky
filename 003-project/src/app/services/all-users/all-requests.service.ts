import { Injectable } from '@angular/core';
import { UserData } from '../../pages/vacations-requests/data/UserData';
import { signal } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AllRequestsService {
  private currentUsersData = signal<UserData[]>([
    {
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
    }, {
      Id: 4,
      Img: '/images/suhib1.jpeg',
      Firstname: "Suhib",
      Lastname: "Saleh",
      Date: `2024/09/26`,
      Duration: "3 Weeks",
      Salary: 1000
    },
    {
      Id: 5,
      Img: '/images/ghaliah1.jfif',
      Firstname: "Ghaliah",
      Lastname: "Samer",
      Date: `2024/09/26`,
      Duration: "3 Weeks",
      Salary: 1000
    }, {
      Id: 6,
      Img: '/images/muhaisen.jfif',
      Firstname: "Ahmad",
      Lastname: "Muhaisen",
      Date: `2024/09/26`,
      Duration: "3 Weeks",
      Salary: 1000
    }, {
      Id: 7,
      Img: '/images/suhib1.jpeg',
      Firstname: "Suhib",
      Lastname: "Saleh",
      Date: `2024/09/26`,
      Duration: "3 Weeks",
      Salary: 1000
    },
    {
      Id: 8,
      Img: '/images/ghaliah1.jfif',
      Firstname: "Ghaliah",
      Lastname: "Samer",
      Date: `2024/09/26`,
      Duration: "3 Weeks",
      Salary: 1000
    }, {
      Id: 9,
      Img: '/images/muhaisen.jfif',
      Firstname: "Ahmad",
      Lastname: "Muhaisen",
      Date: `2024/09/26`,
      Duration: "3 Weeks",
      Salary: 1000
    },
  ])
  constructor() { }
  getUsersData() {
    return this.currentUsersData()
  }
}
