import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {
  date1 = new Date();
  date2 = new Date(2021, 1, 21, 14, 52, 32);
  date3 = new Date(2018, 11, 24, 10, 33, 30);

  constructor() { }

  ngOnInit(): void {
  }

}
