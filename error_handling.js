// Creations of errors and how they impact script execution

console.log(Error("Missing username"))

console.log("This will also be displayed in the console!")

// Throwing errors and how this impacts script execution

throw Error("Username or password do not match")
const hello = "HELLO!" // Unreachable beecause a thrown error breaks execution
console.log(hello)

// try...catch for error logging and handling

try {
  throw new Error("MAJOR ERROR!") // Normally, this would be a block of code to be evaluated
} catch (e) {
  console.log(e) // Here, that block of code's error would be listed (if an error was returned)
}

// A better example of testing actual logic in a try...catch block

function capAllElements(arr){
  try {
    arr.forEach((el, index, array) => { // You actually normally use this for API requests / other external sources
      array[index] = el.toUpperCase();
    });
  } catch (e) {
    console.log(e)
  }
}

capAllElements('Incorrect argument');
