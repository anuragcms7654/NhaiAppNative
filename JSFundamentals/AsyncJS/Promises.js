// Promise has 3 states:
// -- Pending
// -- Fulfilled
// -- Rejected

const myPromise = (num) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (num === 1) {
        resolve("Hiii");
      } else {
        reject("Something Went Wrong");
      }
    }, 1000);
  });
};

// myPromise(2).then((data) => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// })

const myFun = async () => {
  try {
    const res = await myPromise(3);
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

// myFun()

// const MyPromise2 = () => {
//     return Promise.resolve("10000").then(console.log)
// }

// MyPromise2()

// Promise.all
// Waits for all to succeed and Fails immediately if any one fails

const promiseAllExample = () => {
  const p1 = Promise.resolve(10);
  const p2 = Promise.resolve(20);
  const p3 = Promise.resolve(30);

  Promise.all([p1, p2, p3])
    .then((results) => {
      console.log("All promises resolved:", results);
      // results = [result1, result2, result3]
    })
    .catch((err) => {
      console.log("One of the promises rejected:", err);
      // if any one promise rejects
    });
};

// promiseAllExample();

// Promise.all with async/await
const promiseAllExampleAsync = async () => {
  try {
    // Replace above promises with actual async operations
    const p1 = new Promise((resolve) => setTimeout(() => resolve(10), 500));
    const p2 = new Promise((resolve, reject) =>
      setTimeout(() => resolve(20), 200)
    );
    const p3 = new Promise((resolve) => setTimeout(() => resolve(30), 1500));

    const results = await Promise.all([p1, p2, p3]);
    console.log("All promises resolved:", results);
    // results = [result1, result2, result3]
  } catch (err) {
    console.log("One of the promises rejected:", err);
    // if any one promise rejects
  }
};

// promiseAllExampleAsync();

// Promise.allSettled(promises)
// Waits for all promises, no matter success or failure.

// Promise.allSettled
// Waits for all promises to settle (resolve or reject), returns status of each

const promiseAllSettledExample = () => {
  const p1 = Promise.resolve(100);
  const p2 = Promise.reject("Error in p2");
  const p3 = Promise.resolve(300);

  Promise.allSettled([p1, p2, p3]).then((results) => {
    console.log("All promises settled:", results);
    // results = [
    //   { status: 'fulfilled', value: 100 },
    //   { status: 'rejected', reason: 'Error in p2' },
    //   { status: 'fulfilled', value: 300 }
    // ]

    results.forEach((result, index) => {
      if (result.status === "fulfilled") {
        console.log(`Promise ${index + 1} succeeded with value:`, result.value);
      } else {
        console.log(`Promise ${index + 1} failed with reason:`, result.reason);
      }
    });
  });
};

// promiseAllSettledExample();

// Promise.allSettled with async/await
const promiseAllSettledExampleAsync = async () => {
  const p1 = new Promise((resolve) => setTimeout(() => resolve(100), 500));
  const p2 = new Promise((resolve, reject) =>
    setTimeout(() => reject("Error in p2"), 200)
  );
  const p3 = new Promise((resolve) => setTimeout(() => resolve(300), 1000));

  const results = await Promise.allSettled([p1, p2, p3]);
  console.log("All promises settled:", results);

  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(`Promise ${index + 1} succeeded with value:`, result.value);
    } else {
      console.log(`Promise ${index + 1} failed with reason:`, result.reason);
    }
  });
};

// promiseAllSettledExampleAsync();

// Promise.race(promises)

// Promise.race([slow, fast]).then(console.log);
// Promise.race
// Returns the result of the first promise to settle (resolve or reject)

const promiseRaceExample = () => {
  const timeout = new Promise((_, reject) =>
    setTimeout(() => reject("Timeout"), 1000)
  );

  const fetchPromise = new Promise((resolve) =>
    setTimeout(() => resolve("Data fetched successfully"), 1500)
  );

  Promise.race([fetchPromise, timeout])
    .then((result) => {
      console.log("Race winner:", result);
    })
    .catch((err) => {
      console.error("Race rejected:", err);
    });
};

// promiseRaceExample();

// Promise.race with async/await
const promiseRaceExampleAsync = async () => {
  try {
    const timeout = new Promise((_, reject) =>
      setTimeout(() => reject("Timeout"), 1000)
    );

    const fetchPromise = new Promise((resolve) =>
      setTimeout(() => resolve("Data fetched successfully"), 500)
    );

    const result = await Promise.race([fetchPromise, timeout]);
    console.log("Race winner:", result);
  } catch (err) {
    console.error("Race rejected:", err);
  }
};


// Promise.any(promises)
// Returns the first promise that fulfills (ignores rejections unless all reject)

const promiseAnyExample = () => {
    const p1 = Promise.reject("Error 1");
    const p2 = Promise.reject("Error 2");
    const p3 = Promise.resolve("Success!");

    Promise.any([p1, p2, p3])
        .then((result) => {
            console.log("First fulfilled promise:", result);
        })
        .catch((err) => {
            console.error("All promises rejected:", err);
            // AggregateError: All promises were rejected
        });
};

// promiseAnyExample();

// Promise.any with async/await
const promiseAnyExampleAsync = async () => {
    try {
        const p1 = new Promise((_, reject) =>
            setTimeout(() => reject("Error 1"), 500)
        );
        const p2 = new Promise((resolve) =>
            setTimeout(() => resolve("Success from p2"), 1000)
        );
        const p3 = new Promise((_, reject) =>
            setTimeout(() => reject("Error 3"), 200)
        );

        const result = await Promise.any([p1, p2, p3]);
        console.log("First fulfilled promise:", result);
    } catch (err) {
        console.error("All promises rejected:", err.errors);
    }
};

// promiseAnyExampleAsync();

