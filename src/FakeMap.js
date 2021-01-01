module.exports = class FakeMap extends Object {
  constructor(object = {}) {
    super();
  }

  set(key, value) {
    this[key] = value;
    return this.object;
  }

  delete() {
    delete this[key];
    return this.object;
  }

  toString() {
    return JSON.stringify(this);
  }
}