import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const SHELL_ROUTES: Routes = [
  {
    path: '',
    loadChildren: () => import('./../business-domain/mortgage-calculator/mortgage-calculator-routing.module')
      .then(m => m.MortgageCalculatorRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(SHELL_ROUTES)],
  exports: [RouterModule],
})
export class ShellRoutingModule {}
