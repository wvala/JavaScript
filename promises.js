// Promises are JavaScript objects that represent the eventual result of an asynchronous operation.

// Very basic example of an order promise

const inventory = {
  sunglasses: 1900,
  pants: 1088,
  bags: 1344
};

// Write your code below:
const myExecutor = (resolve, reject) => { // Promise takes 2 arguments - resolve, reject
  if (inventory.sunglasses > 2) {
    resolve("Sunglasses order processed.") // If there are enough sunglasses
  } else {
    reject("That item is sold out.") // If inventory.sunglasses < 2
  }
}

const orderSunglasses = () => {
  return new Promise(myExecutor); // Returns value of the above function
}

const orderPromise = orderSunglasses(); // Stores that value in a variable which can be called

console.log(orderPromise) // Logging to test

// Super cool asynchronous functions at work here

console.log("This is the first line of code in app.js.");
// Keep the line above as the first line of code
const usingSTO = () => {
  console.log("Got here")
}

setTimeout(usingSTO, 3000) // This will print the above function LAST!

// Keep the line below as the last line of code:
console.log("This is the last line of code in app.js.");

// Adding success and failure callback functions to the previous library page

const {checkInventory} = require('./library.js');

const order = [['sunglasses', 1], ['bags', 2]];

const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
}

const handleFailure = (rejectionReason) => {
  console.log(rejectionReason);
}

checkInventory(order).then(handleSuccess, handleFailure); // .then is a function which allows for invoking of callback functions
// it can take between 0 and 3 arguments, but it's wise to have things set up for both success and failure of promise settlement
// If no such handlers are provided, .then will just return the same promise it was given

// Example of the long-form way of handling promise rejection

prom
  .then((resolvedValue) => {
    console.log(resolvedValue);
  })
  .then(null, (rejectionReason) => {
    console.log(rejectionReason);
  });

// How to refactor this using .catch()

checkInventory(order)
  .then(handleSuccess)
  .catch(handleFailure) // What I didn't know was that JS handles whitespace pretty well, which makes it easy
  // to format things like this.

// Chaining multiple promises

checkInventory(order)
  .then((resolvedValueArray) => {
    return processPayment(resolvedValueArray) // Moves to next function using the resolved promise
  })
  .then((resolvedValueArray) => {
    return shipOrder(resolvedValueArray) // ... And again
  })
  .then((successMessage) => {
    console.log(successMessage); // If successfully resolved
  })
  .catch((errorMessage) => {
    console.log(errorMessage); // If failed
  });

  // How to correctly factor multiple promises so they don't become nested + no returns are missed
  // Promise composition

  checkInventory(order)
    .then((resolvedValueArray) => {
      return processPayment(resolvedValueArray);
    })
    .then((resolvedValueArray) => {
      return shipOrder(resolvedValueArray);
    })
    .then((successMessage) => {
      console.log(successMessage);
    });

// Efficient concurrency with Promise.all()

const checkSunglasses = checkAvailability("sunglasses", 'Favorite Supply Co.');
const checkPants = checkAvailability("pants", 'Favorite Supply Co.');
const checkBags = checkAvailability("bags", 'Favorite Supply Co.');

Promise.all([checkSunglasses, checkPants, checkBags]) // Accepts an array of promises, and returns a single settled promise - each returns a status to the console while being checked
  .then(onFulfill) // If everything is available AKA all promises are fulfilled
  .catch(onReject) // If a single promise rejects (fast failing) - in this case, an item might be unavailable

// Promise.all() allows multiple asynchronous actions to be performed at the same time, rather than running them one at a time. This saves
// a lot of space and time, of course! It is also very logical - if an order consists of all 3 items, you had might as well run availability checks on every item at the same time
