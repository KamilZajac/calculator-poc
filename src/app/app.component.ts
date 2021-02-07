import { Component, ViewChildren } from '@angular/core';
import { TriangleArea } from './calculatorsData/triangleArea';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // import all calculators here
  calculators = [TriangleArea];
}
