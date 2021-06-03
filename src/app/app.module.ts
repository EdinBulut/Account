import { DataService } from './services/data.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { CreditCardDetailsComponent } from './components/credit-card-details/credit-card-details.component';
import { PaymentPlanComponent } from './components/payment-plan/payment-plan.component';
import { BillingComponent } from './components/billing/billing.component';
import { CancelledComponent } from './components/payment-plan/cancelled/cancelled.component';
import { DefaultComponent } from './components/payment-plan/default/default.component';
import { UnsubscribeComponent } from './components/payment-plan/unsubscribe/unsubscribe.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FormsModule } from '@angular/forms';
import { MakeSpacePipe } from './pipes/make-space.pipe';
import { TextMaskModule } from '@myndmanagement/text-mask';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PersonalInfoComponent,
    CreditCardDetailsComponent,
    PaymentPlanComponent,
    BillingComponent,
    UnsubscribeComponent,
    DefaultComponent,
    CancelledComponent,
    NavigationComponent,
    MakeSpacePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TextMaskModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
