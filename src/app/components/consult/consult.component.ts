import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consult',
  templateUrl: './consult.component.html',
  styleUrls: ['./consult.component.css']
})
export class ConsultComponent implements OnInit {
pic_src="data:image/jpeg;base64,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"
  constructor() { }

  ngOnInit(): void {
  }

}
