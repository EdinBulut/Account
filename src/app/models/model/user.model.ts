export interface User {

  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  password: string;
  paymentPlan: string;
  creditCards: Creditcard[]

}

export interface Creditcard {
  id: string;
  expirationDate: Date;
  number: string;
}