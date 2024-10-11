import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../../../services/history/history.service';
import { HistoryRequest } from './data/history_requests';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-history',
  standalone: true,
  imports: [NgFor],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent implements OnInit {
  constructor(private historyService: HistoryService) { }
  historyRequests!: HistoryRequest[];
  ngOnInit(): void {
    this.historyRequests = this.historyService.getHistorRequests()
  }
}
