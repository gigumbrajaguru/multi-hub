import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-job-search',
  templateUrl: './job-search.component.html',
  styleUrls: ['./job-search.component.css']
})
export class JobSearchComponent implements OnInit {

  @Output() eventClicked = new EventEmitter<any>();
  tags: string[];
  results: any[];

  constructor() {
    this.tags = [];
    this.results = [];
  }

  ngOnInit(): void {
    this.tags = ['Python', 'Remote', 'Full-Time', 'Machine Learning', 'Backend', 'Finance'];
    this.results = [
      { job_title: 'Senior Python Developer', location: 'London, UK', salary: '£65k–£80k', type: 'Full-Time', date: '2 days ago', category: 'Engineering' },
      { job_title: 'ML Engineer', location: 'Remote', salary: '$90–$120/hr', type: 'Contract', date: '1 day ago', category: 'AI / ML' },
      { job_title: 'Data Scientist', location: 'Berlin, DE', salary: '€70k', type: 'Full-Time', date: '3 days ago', category: 'Data' },
      { job_title: 'Backend Developer', location: 'Amsterdam, NL', salary: '€60k–€75k', type: 'Full-Time', date: '5 days ago', category: 'Engineering' },
    ];
  }

  onClickEvent(event: any) {
    this.eventClicked.emit(event);
  }

}
