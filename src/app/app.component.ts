import { Component, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChildren('inputs') inputs;
  calculators = [
    {
      name: 'Triangle Area',
      args: {
        area: {
          key: 'area',
          value: 0,
          method: ((args: { area: number, height: number, base: number }) => (args.height * args.base) / 2)
        },
        height: {
          key: 'height',
          value: 0,
          method: ((args: { area: number, height: number, base: number }) => args.height * 2 / args.base)
        },
        base: {
          key: 'base',
          value: 0
        }
      },
    }
  ];

  selectedArg: { key: string, value: number, method: (x) => number } = this.calculators[0].args.area;

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
