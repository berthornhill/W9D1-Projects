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


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// *** From Notes ***
// function sumThree(num1, num2, num3) {
//     return num1 + num2 + num3;
//   }
  
//   sumThree(4, 20, 6); // == 30
  
//   // you'll write `Function#curry`!
//   let f1 = sumThree.curry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
//   f1 = f1(4); // [Function]
//   f1 = f1(20); // [Function]
//   f1 = f1(6); // = 30
  
//   // or more briefly:
//   sumThree.curry(3)(4)(20)(6); // == 30


  
function addNums(numArgs) {
    
    const nums = [];
    // debugger
    function _curriedSum(num) {
        nums.push(num);
        if (numArgs === nums.length) {
            return (nums.reduce( function accumulator( acc, el) {
               return acc + el 
            }))} else {
            return _curriedSum
            }
         }
    return _curriedSum
}


function sumThree(num1, num2, num3) {
    return num1 + num2 + num3;
  }


Function.prototype.curry = function(numArgs) {
    const args = [];
    const func = this;
    // debugger
    function _curriedFunc(arg) {
        args.push(arg);
        if (numArgs === args.length) {
            return func(...args);
        } else {
            return _curriedFunc;
            }
        };
    return _curriedFunc;
}