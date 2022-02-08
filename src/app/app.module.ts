import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ShellModule } from './shell/shell.module';
import { SharedModule } from './shared/shared.module';
import { MortgageCalculatorModule } from './business-domain/mortgage-calculator/mortgage-calculator.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], {useHash: true}),
    MortgageCalculatorModule,
    SharedModule,
    ShellModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
