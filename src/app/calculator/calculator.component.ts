import { Component, Input, OnInit, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit{
  @Input() calculator;
  @ViewChildren('inputs') inputs;

  selectedArg: { key: string, value: number, method: (x) => number };

  ngOnInit() {
    this.selectedArg = this.calculator.args[Object.keys(this.calculator.args)[0]];
  }

  calculate(calculator) {
    const argsVals = {};

    Object.keys(calculator.args).forEach(key => {
      argsVals[key] = calculator.args[key].value;
    });

    this.selectedArg.value = this.selectedArg.method(argsVals);
  }

  selectArg(arg) {
    this.selectedArg = arg;
  }
}
