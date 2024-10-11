import { Component } from '@angular/core';
import { Admin } from '../data/admin';
import { Input } from '@angular/core';
@Component({
  selector: 'app-request-leave',
  standalone: true,
  imports: [],
  templateUrl: './request-leave.component.html',
  styleUrls: ['./request-leave.component.css',
    
  ]
})
export class RequestLeaveComponent {
  @Input() admin!: Admin;

}
