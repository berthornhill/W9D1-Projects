// function sum() {
//     // this.arguments = [1,2,3,4] 
//     debugger
//     let result = 0;
//     for (let index = 0; index < arguments.length; index++) {
//         result += arguments[index];
//     }
//     return result;
// }

function sum(...nums) {
    // this.arguments = [1,2,3,4] 
    debugger
    let result = 0;
 
    nums.forEach( function(num) { 
        result += num;
    })

    // nums.forEach( callback, num) {
        
    // }

    return result;
}

// function callback(num ) {
//     accumulator += num;
// }