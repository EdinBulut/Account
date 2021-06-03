import { BillingComponent } from './components/billing/billing.component';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditCardDetailsComponent } from './components/credit-card-details/credit-card-details.component';
import { PaymentPlanComponent } from './components/payment-plan/payment-plan.component';
import { DefaultComponent } from './components/payment-plan/default/default.component';
import { UnsubscribeComponent } from './components/payment-plan/unsubscribe/unsubscribe.component';
import { CancelledComponent } from './components/payment-plan/cancelled/cancelled.component';

const routes: Routes = [
  {path: '', redirectTo: '/personal-info', pathMatch: 'full'},
  {path: 'personal-info', component: PersonalInfoComponent},
  {path: 'credit-card', component: CreditCardDetailsComponent},
  // {path: 'payment-plan', loadChildren: () => import('../app/components/payment-plan/payment-plan.module').then(m => m.PaymentPlanModule)},
  {path: 'payment-plan', component: PaymentPlanComponent, 
  children: [
    {path: '' , component: DefaultComponent},
    {path: 'unsubscribe', component: UnsubscribeComponent},
    {path: 'cancelled', component: CancelledComponent}
  ]},
  {path: 'billing', component: BillingComponent},
  // {path: '**', component: PageNotFound},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
