import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { VacationsRequestsComponent } from './vacations-requests/vacations-requests.component';
import { UserCardComponent } from './vacations-requests/user-card/user-card.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent,
    VacationsRequestsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '002-task';
}
