const obj = {
  message: "Hello",
  logLater() {
    setTimeout(function () {
      console.log(this.message);
    }, 1000);
  }
};

obj.logLater();

const obj1 = {
  message: "Hello",
  logLater() {
    setTimeout(function () {
      console.log(this.message);
    }.bind(this), 1000);
  }
};

obj1.logLater();


function area() {
  return this.width * this.height;
}

const rect = { width: 10, height: 20 };

// use call() → output should be 200

console.log(area.call(rect));
 
