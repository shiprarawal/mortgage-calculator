import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatSelectModule, MatTableModule } from '@angular/material';

import { MortgageCalculatorToolComponent } from './components/mortgage-calculator-tool/mortgage-calculator-tool.component';
import { MortgageCalculatorRoutingModule } from './mortgage-calculator-routing.module';

@NgModule({
  declarations: [MortgageCalculatorToolComponent],
  imports: [
    CommonModule,
    MortgageCalculatorRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatTableModule,
    FormsModule
  ]
})
export class MortgageCalculatorModule { }
