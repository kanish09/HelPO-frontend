import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  img_src = ["assets/images/homepage/pic3.jpg", "assets/images/homepage/pic2.jpg", "assets/images/homepage/pic1.jpg"];
  constructor() { }
  ngOnInit() {
  }
}
