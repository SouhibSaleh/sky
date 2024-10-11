import { Component, OnInit } from '@angular/core';
import { Admin } from './data/admin';
import { RequestLeaveComponent } from './request-leave/request-leave.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { AdminService } from '../../../services/admin/admin.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RequestLeaveComponent, ProfileCardComponent],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  admin!: Admin;

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.admin = this.adminService.getAdmin()
  }
}
