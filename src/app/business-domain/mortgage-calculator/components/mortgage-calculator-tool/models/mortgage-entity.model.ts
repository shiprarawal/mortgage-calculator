import {IMortgageEntity, IMortgageSummary} from '../interface/mortgage-calculator.interface';

export class MortgageEntity implements IMortgageEntity {
  mortgageAmount = 0;
  interestRate = 0;
  amortizationPeriodYear = 0;
  paymentFrequency = 0;
  term = 0;
  prepaymentAmount = 0;
  prePaymentFrequency = 0;
  startWithPayment = 0;
  termPrincipalAmount = 0;
  amortizationPrincipalAmount = 0;
  termInterestAmount = 0;
  amortizationInterestAmount = 0;

  constructor(entity: IMortgageEntity) {
    entity = entity || {} as IMortgageEntity;
    Object.assign(this, entity);
  }
  getMortgageSummary(): IMortgageSummary[] {
    // Note: Actual business rules may need to be applied. For this exercise only basic business rules have been applied.
    return [
      {
        category: 'Number of Payments',
        term: this.termNumberOfPayments,
        amortizationPeriod: this.amortizationPeriodNumberOfPayments
      },
      {
        category: 'Mortgage Payment',
        term: this.amortizationPeriodMortgagePayment,
        amortizationPeriod: this.amortizationPeriodMortgagePayment
      },
      { // logic to implement Pre payment logic has not been implemented
        category: 'Prepayment',
        term: this.prepaymentAmount,
        amortizationPeriod: this.prepaymentAmount
      },
      {
        category: 'Principal Payments',
        term: this.termPrincipalPayment,
        amortizationPeriod: this.amortizationPeriodPrincipalPayment
      },
      {
        category: 'Interest Payments',
        term: this.termInterestPayment,
        amortizationPeriod: this.amortizationPeriodInterestPayment
      },
      {
        category: 'Total Cost',
        term: this.termTotalCost,
        amortizationPeriod: this.amortizationPeriodTotalCost
      }
    ];
  }
  get termNumberOfPayments(): number {
    return this.paymentFrequency * this.term;
  }
  get amortizationPeriodNumberOfPayments(): number {
    return this.paymentFrequency * this.amortizationPeriodYear;
  }
  get amortizationPeriodMortgagePayment(): string {
    const amount = (this.mortgageAmount + (this.mortgageAmount * this.interestRate) / 100);
    return !isNaN(amount) ? '$' + (amount / (this.amortizationPeriodNumberOfPayments)) : '';
  }
  get termPrincipalPayment(): string  {
    const principalMortgagePayment = this.mortgageAmount / this.amortizationPeriodNumberOfPayments;
    this.termPrincipalAmount = principalMortgagePayment * this.termNumberOfPayments;
    return  '$' + this.termPrincipalAmount;
  }
  get amortizationPeriodPrincipalPayment(): string {
    const principalMortgagePayment = this.mortgageAmount / this.amortizationPeriodNumberOfPayments;
    this.amortizationPrincipalAmount = principalMortgagePayment * this.amortizationPeriodNumberOfPayments;
    return '$' + this.amortizationPrincipalAmount;
  }
  get termInterestPayment(): string | number {
    const interestAmount = (this.mortgageAmount * this.interestRate) / 100;
    const interestMortgagePayment = interestAmount / this.amortizationPeriodNumberOfPayments;
    this.termInterestAmount = interestMortgagePayment * this.termNumberOfPayments;
    return '$' + this.termInterestAmount;
  }
  get amortizationPeriodInterestPayment(): string {
    const interestAmount = (this.mortgageAmount * this.interestRate) / 100;
    const interestMortgagePayment = interestAmount / this.amortizationPeriodNumberOfPayments;
    this.amortizationInterestAmount = interestMortgagePayment * this.amortizationPeriodNumberOfPayments;
    return '$' + this.amortizationInterestAmount;
  }
  get termTotalCost(): string {
    return '$' + (this.termPrincipalAmount + this.termInterestAmount);
  }
  get amortizationPeriodTotalCost(): string {
    return '$' + (this.amortizationPrincipalAmount + this.amortizationInterestAmount);
  }
}
