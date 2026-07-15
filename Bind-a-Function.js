const counter = {
  count: 0,
  increment() {
    this.count++;
  }
};

const counter1 = {
  count: 0,
  increment() {
    this.count++;
  }
};

const inc = counter.increment.bind(counter1);
inc();
inc();
console.log(counter.count);
console.log(counter1.count);
