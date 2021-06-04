import { Creditcard } from './../../models/model/user.model';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/models/model/user.model';
import { v4 as uuidv4 } from 'uuid';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-credit-card-details',
  templateUrl: './credit-card-details.component.html',
  styleUrls: ['./credit-card-details.component.scss']
})
export class CreditCardDetailsComponent implements OnInit {

  // cardId: number | undefined;
  cardId!: string;
  user!: User
  selectedCard!: { expirationMonth: any; expirationYear: any; id: string; number: string; }
  newCards!: Creditcard[];
  mask = [/[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, ' ', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, ' ', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, ' ', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]
  @ViewChild('focusInput', { static: false })
  focusInput!: ElementRef;
  @ViewChild('alertCards', { static: false })
  alertCards!: ElementRef;
  @ViewChild('cardForm', { static: false })
  cardForm!: NgForm;


  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      let x: any = localStorage.getItem('user') || history.state.data;
      this.user = JSON.parse(x)
      this.cardId = this.user.creditCards[0].id;

      // let a:any = this.user.creditCards[0]
      // this.selectedCard = [].concat(a)[0]
      this.selectedCard = {
        id: this.user.creditCards[0].id,
        number: this.user.creditCards[0].number,
        expirationMonth: new Date(this.user.creditCards[0].expirationDate).getMonth() + 1,
        expirationYear: new Date(this.user.creditCards[0].expirationDate).getFullYear()
      }
      // console.log(new Date(), new Date().getMonth());

    }, 100);
  }

  selectCard(x: Creditcard): void {
    setTimeout(() => {
      if (this.alertCards.nativeElement.style.display !== 'flex') {
        this.cardId = x.id
        this.selectedCard = {
          id: x.id,
          number: x.number,
          expirationMonth: new Date(x.expirationDate).getMonth() + 1,
          expirationYear: new Date(x.expirationDate).getFullYear()
        }
        this.focusInput.nativeElement.scrollIntoView({ behavior: "smooth" })
        Object.keys(this.cardForm.controls).forEach(key => {
          this.cardForm.controls[key].markAsPristine();
        });
      }
    }, 0);
  }

  addNew() {
    this.cardId = '';
    this.selectedCard = {
      id: uuidv4(),
      number: '',
      expirationMonth: '',
      expirationYear: ''
    }
    this.focusInput.nativeElement.focus()
    this.focusInput.nativeElement.scrollIntoView({ behavior: "smooth" })
    // console.log(this.selectedCard);

  }

  onSaveChanges() {
    document.getElementById('buttons')?.setAttribute('style', 'display: none')
    let text = document.getElementById('alerttext')
    if (this.cardForm.valid && this.cardForm.dirty && !this.greaterThan12() && !this.invalidYear() && !this.invalidCardNumber()) {

      let finalCreditCard: Creditcard;
      let year = parseInt(this.selectedCard.expirationYear)
      let month = parseInt(this.selectedCard.expirationMonth) - 1


      finalCreditCard = {
        id: this.selectedCard.id,
        number: this.selectedCard.number.split(' ').join(''),
        expirationDate: new Date(year, month)
      }

      let checkCrCard = this.user.creditCards.filter(x => x.id === this.selectedCard.id)

      if (checkCrCard.length === 1) {
        this.user.creditCards = this.user.creditCards.filter(x => x.id !== this.selectedCard.id)
        this.user.creditCards.push(finalCreditCard)
        if (text !== null) text.innerText = 'You have saved your changes on credit card details successfully.'
      } else {
        this.user.creditCards.push(finalCreditCard)
        this.cardId = finalCreditCard.id;
        if (text !== null) text.innerText = 'You have added your new credit card successfully.'
      }
      localStorage.setItem(
        'user',
        JSON.stringify(this.user)
      );
      
      this.alertCards.nativeElement.style.display = 'flex';

    } else if (!this.cardForm.dirty) {
      if (text !== null) text.innerText = "You haven't made any changes."
      this.alertCards.nativeElement.style.display = 'flex';
    }
    else {
      Object.keys(this.cardForm.controls).forEach(key => {
        this.cardForm.controls[key].markAllAsTouched();
      });
    }
  }



  removeCard(id: string) {
    this.newCards = this.user.creditCards.filter(x => x.id !== id)
    let text = document.getElementById('alerttext')
    if (text !== null) text.innerText = 'Are you sure you want to remove this card?'
    document.getElementById('buttons')?.setAttribute('style', 'display: flex')

    this.alertCards.nativeElement.style.display = 'flex';
  }

  finalRemove() {
    this.user.creditCards = this.newCards;
    this.alertCards.nativeElement.style.display = 'none';
    localStorage.setItem(
      'user',
      JSON.stringify(this.user)
    );
  }

  removeAlert() {
    this.alertCards.nativeElement.style.display = 'none';
  }

  greaterThan12() {
    return (parseInt(this.selectedCard.expirationMonth) > 12) ? true : false
  }

  invalidYear() {
    let thisYear = new Date().getFullYear()
    let x = parseInt(this.selectedCard.expirationYear)
    return (thisYear > x || x > (thisYear + 10)) ? true : false
  }

  invalidCardNumber() {
    return (this.selectedCard.number.indexOf('_') !== -1) ? true : false
  }

}
