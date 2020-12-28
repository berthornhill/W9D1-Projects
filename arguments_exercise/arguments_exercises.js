// function sum() {
//     // this.arguments = [1,2,3,4] 
//     debugger
//     let result = 0;
//     for (let index = 0; index < arguments.length; index++) {
//         result += arguments[index];
//     }
//     return result;
// }

// function sum(...nums) {
//     // this.arguments = [1,2,3,4] 
//     debugger
//     let result = 0;
 
//     nums.forEach( function(num) { 
//         result += num;
//     })
    
//     return result;
// }

// nums.forEach( callback, num) {}
// function callback(num ) {
//     accumulator += num;
// }

function sum(...nums) {
    return nums.reduce( function accumulator(acc, ele) {
        return acc + ele
    }, 5)

}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// Function.prototype.myBind = function(context, ...bindArgs) {
//     const fctn = this;
//     debugger
//     return function(...callArgs) {
//         return fctn.apply(context, bindArgs.concat(callArgs));
//     }
// }

Function.prototype.myBind = function(context) {
    const args = Array.from(arguments)
    const bindArgs = args.slice(1)
    const fctn = this;
    
    return function() {
        const callArgs = Array.from(arguments)
        return fctn.apply(context, bindArgs.concat(callArgs));
    }
}

class Cat {
    constructor(name) {
      this.name = name;
    }
  
    says(sound, person) {
      console.log(`${this.name} says ${sound} to ${person}!`);
      return true;
    }
  }
  
  class Dog {
    constructor(name) {
      this.name = name;
    }
  }
  
  const markov = new Cat("Markov");
  const pavlov = new Dog("Pavlov");
