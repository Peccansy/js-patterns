/* eslint-disable class-methods-use-this */
const decorators = {
  fedTax: {
    getPrice() {
      const { price } = this.uber;
      return (price * 5) / 100;
    },
  },
  money: {
    getPrice() {
      const price = this.uber.getPrice();
      return `$${price.toFixed(2)}`;
    },
  },
};

export default class Sale {
  constructor(price) {
    this.price = price || 100;
  }
  // decorate method from "Javascript Patterns"
  decorate(decoratorName) {
    function F() {}
    F.prototype = Object.getPrototypeOf(this);

    const newInctanse = new F();
    const decorator = decorators[decoratorName];
    const keys = Object.keys(decorator);


    newInctanse.uber = this;
    keys.forEach((key) => {
      newInctanse[key] = decorator[key];
    });
    return newInctanse;
  }

  getPrice() {
    return this.price;
  }
}

// simple 'non classical' sample of decorator design pattern
export class Coffee {
  cost() {
    return 5;
  }
  static get decorators() {
    return {
      sugar(coffee) {
        const instace = coffee;
        const cost = coffee.cost();
        instace.cost = () => cost + 1;
      },
    };
  }
}
