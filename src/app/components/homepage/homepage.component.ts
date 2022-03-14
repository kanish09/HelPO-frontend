import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
img_src1="assets/images/carousel_img1.jpg";
img_src2="assets/images/carousel_img2.jpg"
  constructor() { }

  ngOnInit(): void {
  }

}
