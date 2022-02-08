import { Component, OnInit } from '@angular/core';

import {IMortgageEntity, IMortgageSummary} from './interface/mortgage-calculator.interface';
import { MortgageEntity } from './models/mortgage-entity.model';

export interface Options {
   label: string;
   value: number;
}

@Component({
  selector: 'mc-mortgage-calculator-tool',
  templateUrl: './mortgage-calculator-tool.component.html',
  styleUrls: ['./mortgage-calculator-tool.component.scss']
})

export class MortgageCalculatorToolComponent implements OnInit {
  mortgageEntity: IMortgageEntity = {
    mortgageAmount: 0,
    interestRate: 0,
    amortizationPeriodYear: 0,
    paymentFrequency: 0,
    term: 0,
    prepaymentAmount: 0,
    prePaymentFrequency: 0,
    startWithPayment: 0
  };
  amortizationYears: Options[] = [];
  terms: Options[] = [];

  // business logic for prePaymentFrequency has not been implemented
  prePaymentFrequency: Options[] = [
    { label: 'Each year', value: 1 },
    { label: 'One time', value: 2 },
    { label: 'Same as regular payment', value: 3 }
  ];
  paymentFrequency: Options[] = [
    { label: 'Accelerated Weekly', value: 52 },
    { label: 'Weekly', value: 52 },
    { label: 'Accelerated Bi-Weekly', value: 26 },
    { label: 'Bi-Weekly (Every 2 weeks)', value: 26 },
    { label: 'Semi-monthly (24x per year)', value: 24 },
    { label: 'Monthly (12x per year)', value: 12 },
  ];
  displayedColumns: string[] = ['category', 'term', 'amortizationPeriod'];
  dataSource: IMortgageSummary[] = [];
  ngOnInit() {
    this.getOptions(30, this.amortizationYears, 'Year');
    this.getOptions(10, this.terms, 'Year');
  }
  private getOptions(years: number, optionsContainer: Options[], optionsAppendText: string) {
    for (let i = 1; i <= years; i++) {
      const yearText = i === 1 ? (' ' + optionsAppendText) : (' ' + optionsAppendText + 's');
      const option = {
        label: i + yearText,
        value: i
      };
      optionsContainer.push(option);
    }
  }
  calculateMortgage(): void  {
    const MORTGAGE_ENTITY = new MortgageEntity(this.mortgageEntity);
    this.dataSource = MORTGAGE_ENTITY.getMortgageSummary();
  }
}
