import { Component, OnInit } from '@angular/core';

const images: string[] = [
  "https://www.shutterstock.com/image-photo/baseball-cap-isolated-on-white-260nw-701464549.jpg",
  "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.canstockphoto.com%2Fblack-cap-mockup-sport-baseball-caps-74885016.html&psig=AOvVaw1GwUngy6WBWm1--eN_8CDA&ust=1681300177200000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCJixg7Hhof4CFQAAAAAdAAAAABAR",
  "https://m.media-amazon.com/images/I/715gx45IyzL._UX679_.jpg"
]

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit{

  image = images[0];
  constructor() {

  }

  ngOnInit(): void {

  }

}
