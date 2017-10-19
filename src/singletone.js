// http://amanvirk.me/singleton-classes-in-es6/

let instance = null;

export class SingletonModuleScopedInstance {
  constructor() {
    if (!instance) {
      instance = this;
    }

    return instance;
  }
}

// http://stackoverflow.com/a/26227662/1527470

const singleton = Symbol('current singleton instance');
const singletonEnforcer = Symbol('enforcer');

export class SingletonEnforcer {
  constructor(enforcer) {
    if (enforcer !== singletonEnforcer) {
      throw new Error('Connot construct singleton');
    }
    this.implimentation = 'SingletonEnforcer';
  }

  static get instance() {
    if (!this[singleton]) {
      this[singleton] = new SingletonEnforcer(singletonEnforcer);
    }
    return this[singleton];
  }
}

// or just simple...

export const Singleton = {};
