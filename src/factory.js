/* eslint-disable no-alert, no-console */
// These factories allow you to register new subclasses and create them
export default {
  registered: new Map(),
  register(clazzName, clazz) {
    if (this.registered.has(clazzName)) {
      console.log(`Warning: ${clazzName} already registered in Factory`);
      return false;
    }
    return this.registered.add(clazzName, clazz);
  },
  create(clazzName, ...options) {
    if (!this.registered.has(clazzName)) {
      throw new Error(`unregistered ${clazzName}. You must registered it first`);
    }
    const Clazz = this.registered.get(clazzName);
    return new Clazz(...options);
  },
};

// same factory as above, but does not use a singleton
export class ClassFactory {
  constructor() {
    this.registered = new Map();
  }
  static register(clazzName, clazz) {
    if (this.registered.has(clazzName)) {
      console.log(`Warning: ${clazzName} already registered in Factory`);
      return false;
    }
    return this.registered.add(clazzName, clazz);
  }
  static create(clazzName, ...options) {
    if (!this.registered.has(clazzName)) {
      throw new Error(`unregistered ${clazzName}. You must registered it first`);
    }
    const Clazz = this.registered.get(clazzName);
    return new Clazz(...options);
  }
}
