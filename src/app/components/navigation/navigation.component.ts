import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/model/user.model';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  selected = '';
  @Input() user: User | undefined;
  
  constructor(private router: Router ) {
  }

  ngOnInit(): void {
   setTimeout(() => {  
    this.selected = this.router.url.split('/')[1]
    // console.log('-->', this.router.url.split('/')[1]);
   }, 200);
 }
 
  hover(x: string) {
    let img = document.querySelector('#'+x);
    (x === this.selected) ?
      img?.setAttribute('src', `../assets/images/${x}-active.svg`): img?.setAttribute('src', `../assets/images/${x}-hover.svg`)
  }

  unhover(x: string) {
    let img = document.getElementById(x);
    (x === this.selected)? 
    img?.setAttribute('src', `../assets/images/${x}-active.svg`) : img?.setAttribute('src', `../assets/images/${x}.svg`) 
  }


  onNavigate(x: string) {
    this.selected = x;
    this.router.navigate([`/${x}`], {state: { data: JSON.stringify(this.user)}})
  }
}
