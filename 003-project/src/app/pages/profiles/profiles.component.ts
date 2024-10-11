import {  Component, OnInit } from '@angular/core';
import { ProfileCardComponent } from '../home/profile/profile-card/profile-card.component';
import { ProfileComponent } from "../home/profile/profile.component";
import { AdminService } from '../../services/admin/admin.service';
import { Admin } from '../home/profile/data/admin';
import { HistoryComponent } from './history/history.component';
import { PendingRequestsComponent } from './pending-requests/pending-requests.component';
@Component({
  selector: 'app-profiles',
  standalone: true,
  imports: [ProfileComponent, ProfileCardComponent, HistoryComponent,
    PendingRequestsComponent
  ],
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css', '../home/home.component.css']
})
export class ProfilesComponent implements OnInit {
  admin!: Admin;

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.admin = this.adminService.getAdmin()
  }
}
