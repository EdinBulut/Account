import { DataService } from './services/data.service';
import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { User } from './models/model/user.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  user!: User;
  subscription!: Subscription;

  constructor(private userService: UserService, private dataService: DataService, private router: Router) {

  }

  ngOnInit(): void {

    let x: any = localStorage.getItem('user');
    this.user = JSON.parse(x)
    if (this.user === null) {

      this.userService.getUser().subscribe(data=> {
          this.user = data[0];
          localStorage.setItem(
            'user',
            JSON.stringify(this.user)
          );
  
        });
    }

    // this.subscription = this.dataService.getData().subscribe(x => this.user = x)
    this.subscription = this.dataService.getData()
    .subscribe(() => {let x: any = localStorage.getItem('user'); this.user = JSON.parse(x)})
  }


  ngOnDestroy() {
    // no memory leaks
    this.subscription.unsubscribe();
  }
 
}
