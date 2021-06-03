import { UserService } from './../../services/user.service';
import { AfterContentInit, AfterViewInit, Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/models/model/user.model';
import { NgForm } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {
  @HostListener('window:resize', ['$event'])
  onResize(event: { target: any }) {
    this.width = event.target.innerWidth;
  }

  passwordPattern = /^(?=.*[!@#$%^&*`()_+\-=\[\]{};':\"\|,.<>\/?])(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$/
  specialchar = /[!@#$%^&*`()_+\-=\[\]{};':\"\|,.<>\/?]+/;
  uppercase = /[A-Z]+/;
  lowercase = /[a-z]+/;
  number = /[0-9]+/;
  confirmPassword = '';
  mask = ['3', '8','7', ' ', /\d/,  /\d/, ' ',/\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/ ] 

  width = window.innerWidth;
  user!: User

  @ViewChild('userForm', { static: false })
  userForm!: NgForm;
  @ViewChild('alertPersonal', { static: false })
  alertPersonal!: ElementRef;
  @ViewChild('alerttext', { static: false })
  alerttext!: ElementRef;

  constructor(private dataService: DataService) { }


  ngOnInit(): void {
    setTimeout(() => {
      let x: any =  history.state.data || localStorage.getItem('user');
      this.user = JSON.parse(x)
      // console.log(this.user.phone.split(' ').join('').split('_')[0]);
      
      if(this.user.phone.split(' ').join('').split('_')[0].length ===11 ) 
      this.mask = ['3', '8','7', ' ', /\d/,  /\d/, ' ',/\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/ ]
    }, 100);

  }

  // ngAfterContentInit(): void {
  //   setTimeout(() => {
  //     let x: any = localStorage.getItem('user') || history.state.data;
  //     this.user = JSON.parse(x)
  //   }, 100);
  // }

  onSaveChanges() {
    if (this.userForm.valid && this.userForm.dirty && this.passwordPattern.test(this.user.password) 
        && this.confirmPassword === this.user.password && this.isit11or12()) {
      this.alertPersonal.nativeElement.style.display = 'flex';
      this.alerttext.nativeElement.innerText = "You have saved your personal info changes successfully."
      this.user.phone = this.user.phone.split('_')[0]
      localStorage.setItem(
        'user',
        JSON.stringify(this.user)
      );
      this.dataService.sendData(this.user);

    } else if (!this.userForm.valid) {
      Object.keys(this.userForm.controls).forEach(key => {
        this.userForm.controls[key].markAllAsTouched();
      });
    }
    else if (!this.userForm.dirty) {
      this.alerttext.nativeElement.innerText = "You haven't made any changes."
      this.alertPersonal.nativeElement.style.display = 'flex';
    }
    
  }

  removeAlert() {
    this.alertPersonal.nativeElement.style.display = 'none';
  }



  isit11or12() {
    let numbers = this.user.phone.split(' ').join('').split('_')[0]   
    if(numbers.length===11) {
      this.mask = ['3', '8','7', ' ', /\d/,  /\d/, ' ',/\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/ ]
    }
    return (numbers.length===11 || numbers.length===12) ? true : false
  }

  add12th() {
    this.mask = ['3', '8','7', ' ', /\d/,  /\d/, ' ',/\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/]
  }

  // removeUnderscore() {
  //   let numbers = this.user.phone.split(' ').join('').split('_')[0]   
  //   if(numbers.length===11) {
  //     this.mask = ['3', '8','7', ' ', /\d/,  /\d/, ' ',/\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/ ]
  //   } else if (numbers.length===12) {
  //     this.mask = ['3', '8','7', ' ', /\d/,  /\d/, ' ',/\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/ ]
  //   }
  //   return this.mask
  // }
}
