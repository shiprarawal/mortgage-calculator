import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MortgageCalculatorToolComponent } from './components';


const MORTGAGE_CALCULATOR_ROUTES: Routes = [
  {
    path: '',
    component: MortgageCalculatorToolComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(MORTGAGE_CALCULATOR_ROUTES)],
})
export class MortgageCalculatorRoutingModule {}
