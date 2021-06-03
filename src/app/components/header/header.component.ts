import { User } from './../../models/model/user.model';
import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() user: User | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}