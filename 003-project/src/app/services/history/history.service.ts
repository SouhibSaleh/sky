import { Injectable } from '@angular/core';
import { HistoryRequest } from '../../pages/profiles/history/data/history_requests';
import { signal } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  private currentHistoryRequests = signal<HistoryRequest[]>([
    {
      "type": "Annual Vacation",
      "startDate": "2/3/2023",
      "endDate": "10/3/2023",
      "duration": "8 days",
      "approvedBy": "Hazem Azmi"
    },
    {
      "type": "Sick Vacation",
      "startDate": "2/3/2023",
      "endDate": "10/3/2023",
      "duration": "8 days",
      "approvedBy": "Hazem Azmi"
    },
    {
      "type": "Annual Vacation",
      "startDate": "2/3/2023",
      "endDate": "10/3/2023",
      "duration": "8 days",
      "approvedBy": "Hazem Azmi"
    },
    {
      "type": "Non Paid Vacation",
      "startDate": "2/3/2023",
      "endDate": "10/3/2023",
      "duration": "8 days",
      "approvedBy": "Hazem Azmi"
    },
    {
      "type": "Annual Vacation",
      "startDate": "2/3/2023",
      "endDate": "10/3/2023",
      "duration": "8 days",
      "approvedBy": "Hazem Azmi"
    },
    {
      "type": "Non Paid Vacation",
      "startDate": "2/3/2023",
      "endDate": "10/3/2023",
      "duration": "8 days",
      "approvedBy": "Hazem Azmi"
    },
    {
      "type": "Sick Vacation",
      "startDate": "2/3/2023",
      "endDate": "10/3/2023",
      "duration": "8 days",
      "approvedBy": "Hazem Azmi"
    }
  ])
  constructor() { }
  getHistorRequests() {
    return this.currentHistoryRequests()
  }
}
