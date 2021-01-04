module.exports = class FakeMap extends Object {
  constructor(object = {}) {
    super();
    Object.assign(this, object)
  }

  get(key) {
    return this[key];
  }
  
  set(key, value) {
    this[key] = value;
    return this;
  }

  delete() {
    delete this[key];
    return this;
  }

  toString() {
    return JSON.stringify(this);
  }

  values() {
    return Object.values(this);
  }

  keys() {
    return Object.keys(this);
  }
}
