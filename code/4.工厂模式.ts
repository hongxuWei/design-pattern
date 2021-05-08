let Singlton = function (name: string) {
  this.name = name;
};


Singlton.prototype.getName = function () {
  console.log(this.name);
};

let ProxyCreateSingleton: typeof Singlton = (function () {
  let instance = null;
  return function (name: string) {
    if (instance) {
      return instance
    }
    return instance = new Singlton(name);
  }
})();

let bob = new ProxyCreateSingleton("bob");
console.log(bob.getName());   // "bob"

let lili = new ProxyCreateSingleton("lili");
console.log(lili.getName());  // "bob"
