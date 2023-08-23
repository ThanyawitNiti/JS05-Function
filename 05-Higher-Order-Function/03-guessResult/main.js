// ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร


function makeWorker() {
  let name = 'Pete';
  return function () {
    alert(name);
  };
}
let name = 'John';
let work = makeWorker();
work(); // * aleart('Pete')



function multiply(num1, num2, callback) {
    let result = num1 * num2; // 50 = 5 *10
    callback(result); //this is : 50
}

function displayResult(result) {
    console.log('The result is: ' + result); // this is : 50
}

multiply(5, 10, displayResult); //* The result is: 50

function outerFunction() {
    let outerVariable = 'Hello';

    function innerFunction() {
        console.log(outerVariable + ' World!');
    }

    return innerFunction;
}

let greeting = outerFunction();
greeting(); // Output: "Hello World!"

function adder(a) {
    return function (b) {
        return a + b;
    };
}

let add5 = adder(5);
console.log(add5(3)); // Output: 8
console.log(add5(7)); // Output: 12
