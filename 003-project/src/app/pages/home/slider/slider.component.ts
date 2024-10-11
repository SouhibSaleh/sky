import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { sliderImage } from './data/slider_images';
import { NgFor } from '@angular/common';
import { SliderService } from '../../../services/slider_photos/slider.service';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [NgbModule, NgFor],
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css',
  ]
})
export class SliderComponent implements OnInit {
  images: sliderImage[] = []
  constructor(private sliderService: SliderService) { }
  ngOnInit(): void {
    this.images = this.sliderService.getSliderPhotos()
  }

}
