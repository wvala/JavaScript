// Slightly different from normal code, this file will contain some
// theory and practice in finding errors and bugs in code

// Based on the following error stack trace, fill in the answers to the questions below:
// (A stack trace is a list of functions / methods being sent to the compiler while the error was thrown)

// ------------------------------------------------------------------

// /home/ccuser/workspace/learn-javascript-debugging-code/script.js:5
// if (numberSum > total;) {
//                      ^

// SyntaxError: Unexpected token ;

// ------------------------------------------------------------------

// From what file was this error thrown?
// 1 - Answer: script.js
// On what line of that file was this error thrown?
// 2 - Answer: 5
// What type of error was thrown in this stack trace?
// 3 - Answer: SyntaxError
// What is the description of the error in this stack trace?
// 4 - Answer: Unexpected token

// More questions

// myVariable++;
// // 1 - What type of error will be thrown on the line above: ReferenceError (myVariable has not been defined)

// const myString = 42;
// myString.substring(0);
// // 2 - What type of error will be thrown on the line above: TypeError (wrong method for this data type)

// const myRandomNumber; = Math.random();
// // 3 - What type of error will be thrown on the line above: SyntaxError (typo ; in variable def)

// Example of how logging to console can help you to track data's progress

function capitalizeASingleWord(word) {
  console.log(word)
  if (word.match(' ')) {
    console.log('Word value inside of if statement: ' + word);
    return null;
  }

  let firstLetter = word.charAt(0);
  const restOfWord = word.slice(1);

  firstLetter = firstLetter.toUpperCase();

  return firstLetter + restOfWord;
}

// Should return "Hey"
console.log("capitalizeASingleWord('hey') returns: " + capitalizeASingleWord('hey'));

// Should return null
console.log("capitalizeASingleWord('hey ho') returns: " + capitalizeASingleWord('hey ho'));

// Using docs

// Link to String.repeat() documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
function doubleString(string) {
  return string.repeat(2);
}

// Should return 'echoecho'
console.log("doubleString('echo') returns: " + doubleString('echo'));
