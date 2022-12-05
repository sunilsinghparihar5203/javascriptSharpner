class LRU {
  constructor(max = 5) {
    this.max = max
    this.cache = new Map();
  }
  get() {
    let item = this.cache.get(key)

    if (item) {
      this.cache.delete(key)
      this.cache.set(key, item)
    }

    return item;
  }
  set(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key)
    } else if (this.cache.size == this.max) {
      this.cache.delete(this.first());
    } else {
      console.log("not working")
    }
    this.cache.set(key, value);
  }
  first() {
    return this.cache.keys().next().value
  }
}

const LeastLRU = new LRU(3)

LeastLRU.set("name", "Sanju")
LeastLRU.set("name1", "maju")
console.log(LeastLRU.cache)