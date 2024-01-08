// // let and const
// // let is a new way of declaring variables in javascript
// // const is a new way of declaring constants in javascript
// // let and const are block scoped



// // integer, strings, variable, undefined variable , modifying values of variable, boolean, comparing values, if , while lloops, for loops, function, events, dom

// // string, numbers, boolean, undefined, null, NAN.

// const myName = 57;
// console.log(myName);

// let yourNickName = 'wariz'
// yourNickName = 'popo';
// console.log(yourNickName);

// let newNumber = 70;
// console.log(newNumber);

// let firstNumber;
// console.log(firstNumber);

// //boolean true or false

// let age = 1;

// if (age >= 50) {
//   console.log("You are a senior citizen");
// } else if (age > 20) {
//   console.log("you are an adult");
// } else {
//   console.log("you are not up to 18");
// }



// console.log("hello guys");
// //function delaration and function expression and arrow function

// let a = 2;
// let b = 6;

// // function declaration
// function sumOfTwoNumbers () {
//   let sum = a + b;
//   return sum;
// }

// console.log(sumOfTwoNumbers());


// //function expression
// let subtractionOfTwoNumbers = function () {
//   let answer = a - b;
//   return answer;
// }
// console.log(subtractionOfTwoNumbers());

// // arrow function

// let arrowFunction = () => {
//   let divide = a / b;
//   return divide;
// }

// console.log(arrowFunction());



// //arrays
// //arrays are used to store multiple values in a single variable

// // let myArray = [2, 'wariz', 3];

// // console.log(myArray[])

// // console.log(myArray);

// // methods push, pop, shift, unshift

// // myArray.push(5);
// // console.log(myArray);


// // myArray.pop();
// // console.log(myArray);

// // myArray.unshift(3);
// // console.log(myArray);

// // myArray.shift();
// // console.log(myArray);


// // objects
// // ojects are used to store multiple values in a single variable
// const myObjects = {
//   name: 'wariz',
//   age: 20,
//   girlfriend: 'kenny',
//   sex: 'female'
// };

// console.log(myObjects.name)
// console.log(myObjects.age);
// console.log(myObjects.girlfriend);


// // methods
// // methods are functions that are inside objects

// // loops
// // loops are used to repeat a block of code
// // while loop, do while loop, for loop
// //while loop
// // let i = 0;
// // while (i < 10) {
// //   console.log(i);
// //   i++;
// // }

// // whiile loop
// let i= 20;
// while (i > 0) {
//   console.log(i);
//   i--;
// }


// // do while loop
// // let j = 0;
// // do {
// //   console.log(j);
// //   j++;
// // } while (j < 10);

// let j = 10;
// do {
//   console.log(j);
//   j--;
// } while (j >= 0)

// // for loop

// // for (let k = 0; k < 10; k++) {
// //   console.log(k);
// // }

// // for (let k = 10; k >= 0; k--) {
// //   console.log(k);
// // }

// const myArray = [2, 10, 7, 6, 5, 'wariz', 0];
// for (let k = 0; k < myArray.length; k++) {
//   console.log(myArray[k]);
// }





// dom manipulation
// dom is an object that represents the html document
// dom manipulation is used to manipulate the html document
// document.getElementById, document.getElementsByClassName, document.getElementsByTagName, document.querySelector, document.querySelectorAll


let testElement = document.getElementById('test');
console.log(testElement);
testElement.innerHTML = 'hello world';



// events
// events are actions that can be detected by the browser
// onclick, onmouseover, onmouseout, onkeydown, onkeyup, onkeypress, onload, onsubmit, onfocus, onblur, onchange, ondblclick, oncontextmenu, ondrag, ondragend, ondragenter, ondragleave, ondragover, ondragstart, ondrop, onscroll, onselect, onresize, onmouseup, onmousedown, onmousemove, onmouseover, onmouseout, onkeypress, onkeydown, onkeyup, onload, onsubmit, onfocus, onblur, onchange, ondblclick, oncontextmenu, ondrag, ondragend, ondragenter, ondragleave, ondragover, ondragstart, ondrop, onscroll, onselect, onresize, onmouseup, onmousedown, onmousemove, onmouseover, onmouseout, onkeypress, onkeydown, onkeyup, onload, onsubmit, onfocus, onblur, onchange, ondblclick, oncontextmenu, ondrag, ondragend, ondragenter, ondragleave, ondragover, ondragstart, ondrop, onscroll, onselect, onresize, onmouseup, onmousedown, onmousemove, onmouseover, onmouseout, onkeypress, onkeydown, onkeyup, onload, onsubmit, onfocus, onblur, onchange, ondblclick, oncontextmenu, ondrag, ondragend, ondragenter, ondragleave, ondragover, ondragstart, ondrop, onscroll, onselect, onresize, onmouseup, onmousedown, onmousemove, onmouseover, onmouseout, onkeypress, onkeydown, onkeyup, onload, onsubmit, onfocus, onblur, onchange, ondblclick, oncontextmenu, ondrag, ondragend, ondragenter, ondragleave, ondragover, ondragstart, ondrop, onscroll, onselect, onresize, onmouseup, onmousedown, onmousemove, onmouseover, onmouseout, onkeypress, onkeydown, onkeyup, onload, onsubmit, onfocus, onblur, onchange, ondblclick, oncontextmenu, ondrag, ondragend, ondragenter, ondragleave, ondragover, ondragstart, ondrop, onscroll, onselect, onresize, onmouseup, onmousedown, onmousemove, onmouseover, onmouseout, onkeypress, onkeydown, onkeyup, onload, onsubmit, onfocus, onblur, onchange, ondblclick, oncontextmenu, ondrag, ondragend, ondragenter
