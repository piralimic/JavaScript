/* becode/javascript
 *
 * /07-classes/03-inheritance/script.js - 7.3: héritage
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  document.getElementById("run").addEventListener("click", () => {

  class Animal {
    constructor(name){
      this.name = name;
    }
    sayHello() {
      return `${this.constructor.greeting}! I'm ${this.name}!`;
    }
  }
  // your code here
  class Cat extends Animal {
    constructor(name){
       super(name);
       this.constructor.greeting = "Miaou";
    }
  }


  class Dog extends Animal {
    constructor(name){
      super(name);
      this.constructor.greeting = "Wouaf";
    }
  }

  const premAnimal = new Cat("Hercule");
  const secAnimal = new Dog("Pif");


  let resultat = premAnimal.sayHello()+"<br>"+secAnimal.sayHello();

  document.getElementById("demo").innerHTML = resultat;
  });
})();
