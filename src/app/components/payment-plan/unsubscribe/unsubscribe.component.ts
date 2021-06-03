import { User } from './../../../models/model/user.model';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-unsubscribe',
  templateUrl: './unsubscribe.component.html',
  styleUrls: ['./unsubscribe.component.scss']
})
export class UnsubscribeComponent implements OnInit {

  x: any = localStorage.getItem('user');
  user: User = JSON.parse(this.x)

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  confirm() {
    this.user.paymentPlan = ''
    localStorage.setItem(
      'user',
      JSON.stringify(this.user)
    );
    this.dataService.sendData(this.user);

  }


}
