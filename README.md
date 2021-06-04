# Edit account (https://edit-account.web.app/)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.0.
I have implemented the design as seen [here](https://1drv.ms/b/s!AgKS1Yt09Pz9hR5cbUODD809PNaV).
Webpage is responsive.

## About app

Account has four different parts: personal info, credit card details, payment plan and billing info.

1. Personal info
When the app loads the Personal info is selected.
You can here edit your name, phone, email, password.
When you click on 'save changes' button if your form is valid you will save your changes on local storage.
You will get pop up message that you have made changes successfully.
If the form is not valid it will be shown to you which fields are not filled correctly.

2. Credit card details
Here you can edit, remove or add new credit card.

3. Payment plan
There are three payment plans: starter, business and enterprise.
You have to choose between these three plans and save your changes or you can unsubscribe from your current plan.

4. Billing info
Table with overview of your credit card transactions.





## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
