export interface IMortgageSummary {
  category: string;
  term: string | number;
  amortizationPeriod: string | number;
}
export interface IMortgageEntity {
  mortgageAmount: number;
  interestRate: number;
  amortizationPeriodYear: number;
  paymentFrequency: number;
  term: number;
  prepaymentAmount: number;
  prePaymentFrequency: number;
  startWithPayment: number;
}
