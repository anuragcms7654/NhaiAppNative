// setTimeout(() => console.log("timeout"), 0);
// setImmediate(() => console.log("immediate"));
// 🧠 Not guaranteed at top-level.

// const fs = require("fs");

// fs.readFile(__filename, () => {
//     process.nextTick(() => console.log("nextTick"));
//     setTimeout(() => console.log("timeout"), 0);
//     setImmediate(() => console.log("immediate"));

//     Promise.resolve().then(() => console.log("promise"));
// });

// Promises (microtasks) always run first.

// setImmediate(() => {
    //     console.log("immediate");
    //     process.nextTick(() => console.log("nextTick"));
    //   });
    
    function loop(i) {
        if (i === 3) return;
        setImmediate(() => {
                Promise.resolve().then(() => console.log("promise"));
            console.log(i);
    loop(i + 1);
  });
}
loop(0);
