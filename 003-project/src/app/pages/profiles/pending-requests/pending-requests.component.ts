import { Component, OnInit } from '@angular/core';
import { PendingRequstsService } from '../../../services/pending_requests/pending-requsts.service';
import { PendingRequest } from './data/pending_requests';
import { NgFor } from '@angular/common';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-pending-requests',
  standalone: true,
  imports: [NgFor, DatePipe],
  templateUrl: './pending-requests.component.html',
  styleUrl: './pending-requests.component.css'
})
export class PendingRequestsComponent implements OnInit {
  constructor(private pendingRequstsService: PendingRequstsService) { }
  pendingRequsts!: PendingRequest[]
  ngOnInit(): void {
    this.pendingRequsts = this.pendingRequstsService.getPendingRequests()
  }

}
