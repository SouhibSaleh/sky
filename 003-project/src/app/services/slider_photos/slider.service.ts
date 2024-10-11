import { Injectable } from '@angular/core';
import { sliderImage } from '../../pages/home/slider/data/slider_images';
import { signal } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class SliderService {
  private currnetSliderPhotos = signal<sliderImage[]>([
    {
      id: 0,
      url: `/images/beach1.jfif`,
      headerDes: "Best Spots For A Summer Vacation",
      description: `Check out these spots where we provide you with a discount code! Type VACATION when inserting the
                  promo code and behold the surprise!`,
      alt: `beach1`
    },
    {
      id: 1,
      url: `/images/beach2.jfif`,
      headerDes: "Best Spots For A Summer Vacation",
      description: `Check out these spots where we provide you with a discount code! Type VACATION when inserting the
                  promo code and behold the surprise!`,
      alt: `beach2`
    }
  ])
  constructor() { }
  getSliderPhotos() {
    return this.currnetSliderPhotos()
  }
}
