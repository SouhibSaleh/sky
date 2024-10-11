import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProfileComponent } from './profile/profile.component';
import { SimpleVacationRequestsComponent } from './simple-vacation-requests/simple-vacation-requests.component';
import { SliderComponent } from './slider/slider.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgbModule, ProfileComponent,
    SimpleVacationRequestsComponent,
    SliderComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
