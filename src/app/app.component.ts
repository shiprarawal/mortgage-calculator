import { Component } from '@angular/core';

/* Root component for the application */

@Component({
  selector: 'mc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mortgage-calculator';
}
