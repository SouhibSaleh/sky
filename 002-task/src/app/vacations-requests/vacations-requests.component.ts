import { Component, EventEmitter, OnChanges } from '@angular/core';
import { UserCardComponent } from './user-card/user-card.component';
import { MyCustomPipePipe } from '../my-custom-pipe.pipe';
import { FormsModule } from '@angular/forms';
import { Output } from '@angular/core';
@Component({
  selector: 'app-vacations-requests',
  standalone: true,
  imports: [UserCardComponent, MyCustomPipePipe, FormsModule],
  templateUrl: './vacations-requests.component.html',
  styleUrl: './vacations-requests.component.css'
})
export class VacationsRequestsComponent {
  searchTerm: string = ''

}
