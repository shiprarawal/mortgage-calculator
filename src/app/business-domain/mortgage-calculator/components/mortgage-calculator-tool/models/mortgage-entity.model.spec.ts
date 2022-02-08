import { MortgageEntity } from './mortgage-entity.model';
import { MOCK_MORTGAGE_ENTITY, MOCK_MORTGAGE_SUMMARY } from '../mortgage-calculator.mock';

describe('MortgageEntity', () => {
  it('should create a MortgageEntity with defined parameters', () => {
    const mortgageEntity = new MortgageEntity(MOCK_MORTGAGE_ENTITY);
    expect(mortgageEntity.mortgageAmount).toEqual(1000);
    expect(mortgageEntity.interestRate).toEqual(2);
    expect(mortgageEntity.amortizationPeriodYear).toEqual(10);
    expect(mortgageEntity.paymentFrequency).toEqual(52);
    expect(mortgageEntity.term).toEqual(5);
    expect(mortgageEntity.prepaymentAmount).toEqual(1000);
    expect(mortgageEntity.prePaymentFrequency).toEqual(0);
    expect(mortgageEntity.startWithPayment).toEqual(0);
  });
  it('should create a mortgageEntity with default parameters', () => {
    const mortgageEntity = new MortgageEntity(undefined);
    expect(mortgageEntity.mortgageAmount).toEqual(0);
    expect(mortgageEntity.interestRate).toEqual(0);
    expect(mortgageEntity.amortizationPeriodYear).toEqual(0);
    expect(mortgageEntity.paymentFrequency).toEqual(0);
    expect(mortgageEntity.term).toEqual(0);
    expect(mortgageEntity.prepaymentAmount).toEqual(0);
    expect(mortgageEntity.prePaymentFrequency).toEqual(0);
    expect(mortgageEntity.startWithPayment).toEqual(0);
  });
  describe('getMortgageSummary', () => {
    it('should return mortgage summary', () => {
      const mortgageEntity = new MortgageEntity(MOCK_MORTGAGE_ENTITY);
      expect(mortgageEntity.getMortgageSummary()).toEqual(MOCK_MORTGAGE_SUMMARY);
    });
  });
});

