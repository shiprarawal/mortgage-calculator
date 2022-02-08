import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainLayoutComponent, TopNavigationComponent } from './layout';
import { ShellRoutingModule } from './shell.routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [MainLayoutComponent, TopNavigationComponent],
  exports: [
    MainLayoutComponent
  ],
  imports: [
    CommonModule,
    ShellRoutingModule,
    SharedModule
  ]
})
export class ShellModule { }
