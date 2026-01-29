// Synchronous
// ↓
// process.nextTick
// ↓
// Promise microtasks
// ↓
// Timers
// ↓
// Poll (I/O)
// ↓
// Check (setImmediate)
// ↓
// Close

const fs = require("fs");

console.log("1. Sync");

process.nextTick(() => {
  console.log("2. nextTick");
});

Promise.resolve().then(() => {
  console.log("3. promise");
});

setTimeout(() => {
  console.log("4. timeout");
}, 0);

setTimeout(() => {
    console.log("timer start");
  
    Promise.resolve().then(() => {
      console.log("microtask inside timer");
    });
  
    console.log("timer end");
  }, 0);

fs.readFile(__filename, () => {
  console.log("5. poll (I/O)");

  setImmediate(() => {
    console.log("6. immediate");
  });

  setTimeout(() => {
    console.log("7. timeout inside I/O");
  }, 0);
});

setImmediate(() => {
  console.log("8. immediate (outside)");
});

