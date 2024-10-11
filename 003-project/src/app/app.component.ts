import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './pages/nav-bar/nav-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { VacationsRequestsComponent } from './pages/vacations-requests/vacations-requests.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent,
    VacationsRequestsComponent, HomeComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '002-task';
}
