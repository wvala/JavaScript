// Difference between using async and not using it

function withConstructor(num){
  return new Promise((resolve, reject) => { // have to define a new promise with its own logic
    if (num === 0){
      resolve('zero');
    } else {
      resolve('not zero');
    }
  });
}

async function withAsync(num) { // async automatically invokes a new promise, with its value being the return value
  if (num === 0) {              // stipulated within the logic, like so. The promise's value here will either be
    return "zero"               // "zero" or "not zero" depending on num's value.
  } else {
    return "not zero"
  }
}

// Enter the await operator

// Native promise version:
function nativePromiseDinner() {
  brainstormDinner().then((meal) => {
	  console.log(`I'm going to make ${meal} for dinner.`);
  });
}


// async/await version:
async function announceDinner() { // await is an operator: it returns the resolved value of a promise.
  const meal = await brainstormDinner(); // await halts the execution of an asynchronous function until the promise is resolved
  console.log(`I'm going to make ${meal} for dinner.`); // Knowing this, it makes sense that the two are used together.
} // Much cleaner!

announceDinner(); // Runs the entire process

// Another example of the importance of async/await functions

async function getBeans() {
  console.log(`1. Heading to the store to buy beans...`);
  let value = await shopForBeans();
  console.log(`3. Great! I'm making ${value} beans for dinner tonight!`);
}

getBeans(); // Without async + await, this returns [object Promise] instead of a type of bean.
            // This means the code ISN'T waiting for the promise to be resolved, NOR is it reading its value.

// More realistic async functions featuring options for promise failure

async function hostDinnerParty() {
  try { // In asynchronous functions, try...catch syntax allows you to know exactly where the error is occurring.
    const dinner = await cookBeanSouffle();
    console.log(`${dinner} is served!`)
  } catch (error) {
    console.log(error)
    console.log("Ordering a pizza!")
  }
}

hostDinnerParty();

// Independent promises (promises which don't rely upon other promises to settle)

async function serveDinner() {
  const vegetablePromise = steamBroccoli(); // If we left the await in each of these, the function would pause 4 times.
  const starchPromise = cookRice();         // By leaving the await for later, we are here just constructing the promises simultaneously.
  const proteinPromise = bakeChicken();
  const sidePromise = cookBeans();          // Line 71 executes and returns all 4 resolved values simultaneously. Much more efficient.
  console.log(`Dinner is served. We're having ${await vegetablePromise}, ${await starchPromise}, ${await proteinPromise}, and ${await sidePromise}.`)
}

serveDinner();

// Extra concurrency using await Promise.all()

async function serveDinnerAgain() {
  const foodArray = await Promise.all([steamBroccoli(), cookRice(), bakeChicken(), cookBeans()]); // Gives return values of all the promises at once
  console.log(`Dinner is served. We're having ${foodArray[0]}, ${foodArray[1]}, ${foodArray[2]}, and ${foodArray[3]}.`);
} // NOTE: Each of these promises need to be resolved successfully in order for dinner to be served, so to speak.
  // Therefore, await Promise.all() is a good option because if one fails, the code stops and returns the error.
  // This is the concept of "failing fast" at work once again - really good for speedy bug fixing and error logging.

serveDinnerAgain();
