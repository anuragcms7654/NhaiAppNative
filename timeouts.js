// for (var i = 0; i < 3; i++) {
//   const timers = (x) =>
//     setTimeout(() => {
//       console.log(x);
//     }, 2000);
//   timers(i);
// }

// for (let i = 0; i < 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 2000);

//   console.log(i);
// }

// const timers = (x) => {
//   setTimeout(() => {
//     return Promise.resolve(x);
//   }, 2000);
// };
// const timersPromise = (x) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(x);
//     }, 2000);
//   });
// };

// for (let i = 0; i < 4; i++) {
//   const data = await timersPromise(i);
//   console.log(data);
// }

// for (let i = 0; i < 10; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, i * 1000);
// }

// for (let i = 0; i < 3; i++) {
//   Promise.resolve().then(() => console.log("Promise", i));
//   setTimeout(() => console.log("Timeout", i), 1000);
// }

// nested timeout trick

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//     setTimeout(() => console.log(i), 0);
//   }, 0);
// }

// for (var i = 0; i < 3; i++) {
//   setTimeout((i) => {
//     console.log(i);
//   }, 1000);
//   // undefined
//   // undefined
//   // undefined
// }

// for (var i = 0; i < 3; i++) {
//   setTimeout(
//     function (i) {
//       console.log(i);
//     },1000,i);
// }

for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 0);
}

console.log("Done");
