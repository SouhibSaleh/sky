import { Injectable } from '@angular/core';
import { Admin } from '../../pages/home/profile/data/admin';
import { signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private currentAdmin = signal<Admin>({
    id: 0,
    firstName: 'suhib',
    lastName: 'saleh',
    role: "Software Developer",
    imgUrl: "/images/suhib1.jpeg",
    reportingTo: "Salwa Assem",
    corporateLevel: 10,
    vacationRequests: 10,
    leaveRequests: 10,
    lifeTime: 2.5,
    vacationDayLeft: 10,
    sickDayLeft: 14
  });

  constructor() { }
  getAdmin() {
    return this.currentAdmin();
  }


}
