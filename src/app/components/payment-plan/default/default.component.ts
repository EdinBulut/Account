import { Router } from '@angular/router';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/models/model/user.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  user!: User
  paymentPlan!: string
  @ViewChild('alertPayment', { static: false })
  alertPayment!: ElementRef;
  @ViewChild('alerttext', { static: false })
  alerttext!: ElementRef;
  @ViewChild('alertimg', { static: false })
  alertimg!: ElementRef;
  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      let x: any = history.state.data || localStorage.getItem('user');
      this.user = JSON.parse(x)
      this.paymentPlan = this.user.paymentPlan
    }, 100);
  }

  changePlan(x: string): void {
    this.paymentPlan = x;
  }

  savePlan() {
    this.alertPayment.nativeElement.style.display = 'flex';
    if (this.user.paymentPlan === this.paymentPlan) {
      this.alertimg.nativeElement.setAttribute('src', `../../../../assets/images/${this.paymentPlan}-plan.svg`)
      this.alerttext.nativeElement.innerText = `You are already subscribed to this plan.`
    } 
    else {
      this.alertimg.nativeElement.setAttribute('src', `../../../../assets/images/${this.paymentPlan}-plan.svg`)
      this.alerttext.nativeElement.innerHTML = `Your new payment plan is <strong>${this.paymentPlan}</strong> plan.`
    }
    this.user.paymentPlan = this.paymentPlan;
    localStorage.setItem(
      'user',
      JSON.stringify(this.user)
    );
    this.dataService.sendData(this.user);
  }

  cancelSubscription(plan: string) {
    if (this.user.paymentPlan === '') {
      this.alertPayment.nativeElement.style.display = 'flex';
      this.alertimg.nativeElement.setAttribute('src', `../../../../assets/images/payment-plan-active.svg`)
      this.alerttext.nativeElement.innerText = `You are not subscribed to any of payment plans.`
    }
    else if (plan !== this.user.paymentPlan) {
      this.alertPayment.nativeElement.style.display = 'flex';
      this.alertimg.nativeElement.setAttribute('src', `../../../../assets/images/${this.paymentPlan}-plan.svg`)
      this.alerttext.nativeElement.innerHTML = `This is not your payment plan. You are subscribed to ${this.user.paymentPlan} plan.`
      this.paymentPlan = this.user.paymentPlan
    } 
     else {
      this.router.navigate(['/payment-plan/unsubscribe'])
    }
  }

  removeAlert() {
    this.alertPayment.nativeElement.style.display = 'none';
  }

}
