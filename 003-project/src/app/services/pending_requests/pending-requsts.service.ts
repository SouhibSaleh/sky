import { Injectable } from '@angular/core';
import { signal } from '@angular/core';
import { PendingRequest } from '../../pages/profiles/pending-requests/data/pending_requests';
@Injectable({
  providedIn: 'root'
})
export class PendingRequstsService {
  private currentPendingRequsts = signal<PendingRequest[]>([
    {
      firstName: "ahmad",
      lastName: "muhaisen",
      submitedOn: "1/3/2024",
      duration: 2,
      firstDate: "1/4/2023",
      lastDate: "10/4/2023",
      currentlyAt: "Omar Ahmad",
      imgUrl: "/images/muhaisen.jfif"
    }, {
      firstName: "ghaliah",
      lastName: "samer",
      submitedOn: "1/3/2024",
      duration: 2,
      firstDate: "1/4/2023",
      lastDate: "10/4/2023",
      currentlyAt: "Omar Ahmad",
      imgUrl: "/images/ghaliah1.jfif"

    }

  ])
  constructor() { }
  getPendingRequests() {
    return this.currentPendingRequsts()
  }
}
