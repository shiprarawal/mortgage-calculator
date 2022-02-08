import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatSelectModule, MatTableModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MortgageCalculatorToolComponent } from './mortgage-calculator-tool.component';
import {
  MOCK_AMORTIZATION_YEARS,
  MOCK_MORTGAGE_ENTITY,
  MOCK_MORTGAGE_SUMMARY,
  MOCK_TERMS
} from './mortgage-calculator.mock';

describe('MortgageCalculatorToolComponent', () => {
  let component: MortgageCalculatorToolComponent;
  let fixture: ComponentFixture<MortgageCalculatorToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatFormFieldModule, MatInputModule, MatSelectModule, FormsModule, MatButtonModule, MatTableModule, NoopAnimationsModule],
      declarations: [ MortgageCalculatorToolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MortgageCalculatorToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('ngOnInit', () => {
    it('should initialize amortizationYears and terms', () => {
      component.amortizationYears = [];
      component.terms = [];
      fixture.detectChanges();
      component.ngOnInit();
      expect(component.amortizationYears).toEqual(MOCK_AMORTIZATION_YEARS);
      expect(component.terms).toEqual(MOCK_TERMS);
    });
  });
  describe('calculateMortgage', () => {
    it('should update dataSource', () => {
      component.mortgageEntity = MOCK_MORTGAGE_ENTITY;
      component.calculateMortgage();
      expect(component.dataSource).toEqual(MOCK_MORTGAGE_SUMMARY);
    });
  });
});
