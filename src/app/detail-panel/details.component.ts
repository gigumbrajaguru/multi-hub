import {Component, Input, OnInit} from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-detail-panel',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() event: any;

  constructor() {
  }

  ngOnInit(): void {
  }

}
