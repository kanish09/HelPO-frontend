import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  img_src = ["assets/images/image1.jpg", "assets/images/image2.jpg", "assets/images/image3.jpg"];
  actualImage: any;
  changeBackgroundCounter = 0;
  constructor() { }
  ngOnInit() {
    this.actualImage = this.img_src[0];
    setInterval(() => {
      this.changeBackgroundCounter++;
      if (this.changeBackgroundCounter > this.img_src.length - 1) {
        this.changeBackgroundCounter = 0;
      }
      this.actualImage = this.img_src[this.changeBackgroundCounter];
    }, 5000);
  }
}
