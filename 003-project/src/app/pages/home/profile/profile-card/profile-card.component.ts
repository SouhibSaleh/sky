import { Component, input } from '@angular/core';
import { Admin } from '../data/admin';
@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [],
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css',]
})
export class ProfileCardComponent {
  admin = input.required<Admin>()
}
