import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent implements OnInit {

  imageList = [
    {
      url: '../../../assets/toryBrunch/bag1.jpeg'
    },
    {
      url: '../../../assets/toryBrunch/bag2.jpeg'
    },
    {
      url: '../../../assets/toryBrunch/bag3.jpeg'
    }, 
    {
      url: '../../../assets/toryBrunch/bag4.jpeg'
    }, 
    {
      url: '../../../assets/toryBrunch/bag5.jpeg'
    }
  ]
  constructor() {

  }

  ngOnInit(): void {
  }

}
