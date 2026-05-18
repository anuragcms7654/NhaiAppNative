// ==============================
// EVENT LOOP PRACTICE FILE
// Run: node index.js
// Uncomment ONE block at a time
// ==============================

// =====================================
// Q1: Promise vs setTimeout
// =====================================
// /*
// console.log("start");
// setTimeout(() => console.log("timeout"), 0);
// Promise.resolve().then(() => console.log("promise"));
// console.log("end");

// Expected Output:
// start
// end
// promise
// timeout

// Explanation:
// Promise → microtask (runs before timers)

// =====================================
// Q2: Multiple setTimeout order
// =====================================
/*
setTimeout(() => console.log("timeout1"), 0);
setTimeout(() => console.log("timeout2"), 0);

Promise.resolve().then(() => console.log("promise"));

console.log("end");

// Expected Output:
// end
// promise
// timeout1
// timeout2

// Explanation:
// FIFO order in timers queue
*/

// =====================================
// Q3: setInterval overlap issue
// =====================================
/*
let count = 0;

setInterval(() => {
  console.log("start", count);

  // Simulate heavy work (blocking)
  const start = Date.now();
  while (Date.now() - start < 2000) {}

  console.log("end", count++);
}, 1000);

// Observation:
// Calls will overlap or delay inconsistently

// Explanation:
// setInterval does NOT wait for previous execution
*/

// =====================================
// Q4: setTimeout in loop (var vs let)
// =====================================
/*
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log("var:", i), 1000);
}

// Expected:
// var: 3
// var: 3
// var: 3

// Fix:
for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log("let:", j), 1000);
}

// Expected:
// let: 0
// let: 1
// let: 2

// Explanation:
// var → function scoped
// let → block scoped
*/

// =====================================
// Q5: setTimeout vs setImmediate (Node.js)
// =====================================
/*
setTimeout(() => console.log("timeout"), 0);
setImmediate(() => console.log("immediate"));

// Output:
// NOT guaranteed

// Explanation:
// Depends on event loop timing
*/

// =====================================
// Q6: setImmediate inside I/O
// =====================================
/*
const fs = require("fs");

fs.readFile(__filename, () => {
  setTimeout(() => console.log("timeout"), 0);
  setImmediate(() => console.log("immediate"));
});

// Expected:
// immediate
// timeout

// Explanation:
// Inside I/O → check phase runs first
*/

// =====================================
// Q7: Microtask starvation
// =====================================
/*
setTimeout(() => console.log("timeout"), 0);

function loop() {
  Promise.resolve().then(loop);
}
loop();

// Expected:
// timeout NEVER runs

// Explanation:
// Infinite microtask queue blocks event loop
*/

// =====================================
// Q8: Nested setTimeout
// =====================================
/*
setTimeout(() => {
  console.log("A");

  setTimeout(() => {
    console.log("B");
  }, 0);

}, 0);

// Expected:
// A
// B

// Explanation:
// Inner timeout → next event loop cycle
*/

// =====================================
// Q9: setTimeout same delay
// =====================================
/*
setTimeout(() => console.log("A"), 1000);
setTimeout(() => console.log("B"), 1000);

// Expected:
// A
// B

// Explanation:
// Event loop executes one callback at a time
*/

// =====================================
// Q10: process.nextTick vs Promise
// =====================================

process.nextTick(() => console.log("nextTick"));
Promise.resolve().then(() => console.log("promise"));
setTimeout(() => console.log("timeout"), 0);

// Expected:
// nextTick
// promise
// timeout

// Explanation:
// nextTick > Promise > timers

// =====================================
// Q11: setInterval vs recursive setTimeout
// =====================================
function safeLoop() {
  setTimeout(() => {
    console.log("safe execution");
    safeLoop();
  }, 1000);
}

// safeLoop();

// Better than setInterval when execution time varies
