import { TestBed, async } from '@angular/core/testing';
import { MockComponent } from 'ng-mocks';

import { AppComponent } from './app.component';
import { MainLayoutComponent } from './shell/layout';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, MockComponent(MainLayoutComponent)
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
